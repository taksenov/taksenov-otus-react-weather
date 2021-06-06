import React, { Suspense, lazy } from 'react';
import { Layout } from 'antd';
import Preloader from '../../shared/componets/Preloader';

import RootLayout from '../RootLayout';

const { Content } = Layout;

// Preloader for Suspense
const PreLoader = () => {
  return (
    <RootLayout>
      <Content>
        <Content
          style={{
            padding: 0,
            margin: 0,
            height: 'calc(100vh - 60px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Preloader size="large" />
        </Content>
      </Content>
    </RootLayout>
  );
};

const CitiesController = lazy(() => import('./Cities.controller'));

// Main Render
const CitiesLoadable = () => {
  return (
    <div>
      <Suspense fallback={<PreLoader />}>
        <CitiesController />
      </Suspense>
    </div>
  );
};

export default CitiesLoadable;
