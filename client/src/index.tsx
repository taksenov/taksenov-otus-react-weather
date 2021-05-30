import 'core-js'; // Provides polyfills necessary for a full ES2015+ environment
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocalizeProvider } from 'react-localize-redux';

import { store } from './app/core/state';

import ApplicationWrapper from './app/views/ApplicationWrapper';

import * as serviceWorker from './serviceWorker';

import './index.css';
import './App.scss';

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider>
      <ApplicationWrapper />
    </LocalizeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
