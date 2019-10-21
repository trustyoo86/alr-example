'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

// libs
import apolloClient from '../utils/apolloClient';

// containers
import Home from '../containers/Home';

const App = () => {
  return (
    <Home />
  );
};

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);