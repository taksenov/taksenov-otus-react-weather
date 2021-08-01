// eslint-disable-next-line import/no-extraneous-dependencies
import 'core-js'; // Provides polyfills necessary for a full ES2015+ environment
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocalizeProvider } from 'react-localize-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { store } from './app/core/state';

import ApplicationWrapper from './app/views/ApplicationWrapper';

import * as serviceWorker from './serviceWorker';

import './index.css';
import './App.scss';

const client = new ApolloClient({
  uri: 'http://0.0.0.0:8080/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <LocalizeProvider>
        <ApplicationWrapper />
      </LocalizeProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
