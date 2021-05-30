import React, { Component } from 'react';

import AppRouter from '../AppRouter';

import NotifyToast from '../../shared/containers/NotifyToast';
import ErrorBoundary from '../../shared/componets/ErrorBoundary';

class AppInit extends Component {
  render() {
    return (
      <ErrorBoundary>
        <>
          <AppRouter />

          {/* Система уведомлений */}
          <NotifyToast />
        </>
      </ErrorBoundary>
    );
  }
}

export default AppInit;
