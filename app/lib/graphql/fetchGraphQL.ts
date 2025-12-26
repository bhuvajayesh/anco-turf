import { tokenData } from "@/app/utils/tokenData";

// lib/graphql/fetchGraphQL.ts
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL!;
const staticAuthToken = tokenData.auth_token;

export async function fetchGraphQL(
    query: string,
    authToken: boolean = false
) {
    let token = "";

    if (authToken && typeof window !== "undefined") {
        token = localStorage.getItem("authToken") || staticAuthToken || "";
    }

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const res = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({ query }),
        cache: "no-store",
    });

    const json = await res.json();

    if (json.errors) {
        throw new Error(json.errors[0]?.message || "GraphQL Error");
    }

    return json.data;
}