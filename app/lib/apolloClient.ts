import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  Observable,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { REFRESH_AUTH_TOKEN } from "./graphql/mutations/refreshToken";
import { tokenData } from "../utils/tokenData";

interface RefreshTokenResponse {
  refreshJwtAuthToken: {
    authToken: string;
  };
}

interface RefreshTokenVariables {
  refreshToken: string;
}

/* ---------------------------------- */
/* Config */
/* ---------------------------------- */
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL!;
const Auth_Token_Static = tokenData.auth_token;
/* ---------------------------------- */
/* Auth Link */
/* ---------------------------------- */
const authLink = setContext((_, { headers }) => {
  if (typeof window === "undefined") return { headers };

  const token = localStorage.getItem("authToken") || Auth_Token_Static;
  // console.log("Token--->>>", token);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

/* ---------------------------------- */
/* HTTP Link */
/* ---------------------------------- */
const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});

/* ---------------------------------- */
/* Refresh Client (NO auth / NO error) */
/* ---------------------------------- */
const refreshClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

/* ---------------------------------- */
/* Refresh State */
/* ---------------------------------- */
let isRefreshing = false;
let pendingRequests: (() => void)[] = [];

const resolvePendingRequests = () => {
  pendingRequests.forEach((cb) => cb());
  pendingRequests = [];
};

/* ---------------------------------- */
/* Error Link (TYPE-SAFE) */
/* ---------------------------------- */
const collectErrors = (errorResponse: any) => {
  const errors: any[] = [];
  const { graphQLErrors, networkError, error, result } = errorResponse;

  if (graphQLErrors && Array.isArray(graphQLErrors)) {
    errors.push(...graphQLErrors);
  }
  console.log("graphQLErrors-->>", graphQLErrors)
  if (networkError?.result?.errors && Array.isArray(networkError.result.errors)) {
    errors.push(...networkError.result.errors);
  }
  console.log("networkError-->>", networkError)
  // Handle user-specific error structure
  if (error?.errors && Array.isArray(error.errors)) {
    errors.push(...error.errors);
  }
  console.log("error-->>", error)
  if (result?.errors && Array.isArray(result.errors)) {
    errors.push(...result.errors);
  }
  console.log("result-->>", result)
  return errors;
};

const isAuthError = (errors: any[]) => {
  return errors.some((err) =>
    err.extensions?.code === "UNAUTHENTICATED" ||
    err.message?.includes("cannot be accessed without authentication") ||
    err.extensions?.debugMessage === "Expired token" ||
    err.extensions?.debugMessage?.includes("Expired token") ||
    err.message?.toLowerCase().includes("expired token")
  );
};

const errorLink = onError((errorResponse) => {
  const { operation, forward } = errorResponse;
  const allErrors = collectErrors(errorResponse);

  console.log("Collected Errors:", allErrors);

  if (!isAuthError(allErrors)) return;

  return new Observable((observer) => {
    const retryRequest = () => {
      forward(operation).subscribe(observer);
    };

    if (!isRefreshing) {
      isRefreshing = true;

      const refreshToken = tokenData.refresh_token;

      if (!refreshToken) {
        // console.error("No refresh token found");
        observer.error(new Error("No refresh token found"));
        isRefreshing = false;
        return;
      }

      refreshClient
        .mutate<RefreshTokenResponse, RefreshTokenVariables>({
          mutation: REFRESH_AUTH_TOKEN,
          variables: { refreshToken },
        })
        .then(({ data }) => {
          const newToken = data?.refreshJwtAuthToken?.authToken;
          if (!newToken) throw new Error("Token refresh failed");

          localStorage.setItem("authToken", newToken);
          resolvePendingRequests();
          retryRequest();
        })
        .catch((err) => {
          // console.error("Token refresh failed:", err);
          observer.error(err);
        })
        .finally(() => {
          isRefreshing = false;
        });
    } else {
      pendingRequests.push(retryRequest);
    }
  });
});

/* ---------------------------------- */
/* Main Apollo Client */
/* ---------------------------------- */
export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
