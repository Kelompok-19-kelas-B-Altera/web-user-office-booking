import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const isDev = process.env.NODE_ENV === "development";

const client = new ApolloClient({
  uri: `${isDev ? process.env.NEXT_PUBLIC_BASE_URL : ""}/graphql`,
  cache: new InMemoryCache(),
});

export default client;