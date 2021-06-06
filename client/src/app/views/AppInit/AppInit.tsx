import React, { Component } from 'react';

import AppRouter from '../AppRouter';

import ErrorBoundary from '../../shared/componets/ErrorBoundary';

class AppInit extends Component {
  render() {
    return (
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    );
  }
}

export default AppInit;
