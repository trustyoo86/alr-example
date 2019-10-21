'use strict';

import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
const gql = require('graphql-tag');

const query = gql`
  query test {
    person @rest(
        type: "Person",
        path: "/",
        endpoint: "test"
      ) {
      name,
      id
    }
  }
`;

const Home = () => {
  return (
    <Fragment>
      <Query query={query}>
        {
          ({ loading, data }) => {
            if (loading) { return <p>Loading...</p>; }
            return (
              <div>
                { JSON.stringify(data.person) }
              </div>
            );
          }
        }
      </Query>
    </Fragment>
  );
};

export default Home;