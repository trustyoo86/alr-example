'use strict';

const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { RestLink } = require('apollo-link-rest');
const gql = require('graphql-tag');

// make rest api link
const restLink = new RestLink({
  uri: 'http://localhost:4000/api/test',
});

// make client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

// make query
const query = gql`
  query test {
    person @rest(type: "Person", path: "/") {
      name,
      id
    }
  }
`;

client.query({ query }).then((response) => {
  console.log(response.data);
});

console.log('hello world!');