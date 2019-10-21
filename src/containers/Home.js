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
            const { person } = data;
            return (
              <div>
                {
                  person.map((item) => {
                    return <p key={JSON.stringify(item)}>{JSON.stringify(item)}</p>;
                  })
                }
              </div>
            );
          }
        }
      </Query>
    </Fragment>
  );
};

export default Home;