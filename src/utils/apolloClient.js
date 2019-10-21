'use strict';

import { ApolloClient } from 'apollo-client';
import { RestLink } from 'apollo-link-rest';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = new RestLink({
  endpoints: {
    test: 'http://localhost:4000/api/test',
  },
});

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default apolloClient;