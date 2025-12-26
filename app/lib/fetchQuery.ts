import { getClient } from "./apolloClientServer";

export async function customFetchQuery(query: any) {
    const { data, error } = await getClient().query({
        query,
        errorPolicy: "all",
        context: {
            fetchOptions: {
                next: { revalidate: 60 },
            },
        },
    });
    return { data, error };
}