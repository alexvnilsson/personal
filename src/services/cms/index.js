import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import config from "../../Config";

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = createHttpLink({
  uri: `${config.cms.api.baseUrl}/graphql`,
  cache: new InMemoryCache(),
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default client;
