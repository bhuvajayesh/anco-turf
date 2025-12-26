import { HttpLink, from, Observable, ApolloClient, InMemoryCache } from "@apollo/client";
import { cookies } from "next/headers";
import { onError } from "@apollo/client/link/error";
import { tokenData } from "../utils/tokenData";
import { REFRESH_AUTH_TOKEN } from "./graphql/mutations/refreshToken";
import { print } from "graphql";
import { removeAuthCookies } from "../actions/authActions";

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

// Helper to check if error is an auth error
const isAuthError = (errors: any[]) => {
  return errors.some(
    (err) =>
      err.extensions?.code === "UNAUTHENTICATED" ||
      err.message?.includes("cannot be accessed without authentication") ||
      err.extensions?.debugMessage === "Expired token" ||
      err.extensions?.debugMessage?.includes("Expired token") ||
      err.message?.toLowerCase().includes("expired token")
  );
};

// Function to refresh token using fetch (to avoid circular dependency with Apollo Client)
async function refreshAuthToken(refreshToken: string) {
  if (!refreshToken) return null;
  try {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: print(REFRESH_AUTH_TOKEN),
        variables: { refreshToken },
      }),
    });

    if (!response.ok) {
      console.error("Refresh token HTTP error:", response.status);
      return null;
    }
    // 🔴 If refresh token API returns 500
    if (response.status === 500) {
      await removeAuthCookies();
      // Redirect to home if refresh token fails
      window.location.href = "/";
    }

    const json = await response.json();
    return json.data?.refreshJwtAuthToken?.authToken ?? null;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}

export const getClient = () => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    fetchOptions: { cache: "no-store" },
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward, error }: any) => {
    const errors: any[] = [];

    // Collect all possible errors
    if (graphQLErrors) errors.push(...graphQLErrors);

    if (networkError && "result" in networkError && (networkError.result as any).errors) {
      errors.push(...(networkError.result as any).errors);
    }

    // Handle CombinedGraphQLErrors or other wrapped errors
    if (error) {
      if ('errors' in error && Array.isArray((error as any).errors)) {
        errors.push(...(error as any).errors);
      } else {
        errors.push(error);
      }
    }

    if (isAuthError(errors)) {
      return new Observable((observer) => {
        (async () => {
          try {
            const refreshToken = tokenData.refresh_token;
            if (!refreshToken) {
              throw new Error("No refresh token available");
            }

            const newAuthToken = await refreshAuthToken(refreshToken);
            // console.log("newAuthTokennewAuthToken", newAuthToken)

            if (newAuthToken) {
              // Update the token in memory
              tokenData.auth_token = newAuthToken;
              // @ts-ignore
              tokenData.updated = true;

              // Update the header for the retried request
              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  Authorization: `Bearer ${newAuthToken}`,
                },
              });

              // Retry the request
              const subscriber = {
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
              };

              forward(operation).subscribe(subscriber);
            } else {
              // If refresh failed, pass the original error
              observer.error(error || new Error("Token refresh failed"));
            }
          } catch (err) {
            observer.error(err);
          }
        })();
      });
    }
  });

  const authMiddleware = new HttpLink({
    uri: GRAPHQL_URL,
    fetch: async (uri, options) => {
      const cookieStore = await cookies();
      const cookieToken = cookieStore.get("authToken")?.value;
      const token = cookieToken || tokenData.auth_token;
      // console.log("tokentoken",token)
      const optionsWithAuth = {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: token ? `Bearer ${token}` : "",
        },
      };
      return fetch(uri, optionsWithAuth);
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, authMiddleware]),
  });
};
