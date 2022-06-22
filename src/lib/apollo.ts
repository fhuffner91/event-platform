import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4py0pap2k2q01xs1ijmdqzq/master',
    cache: new InMemoryCache()
})