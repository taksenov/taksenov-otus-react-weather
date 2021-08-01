import React from 'react';

import Preloader from '../../../../shared/componets/Preloader';

const InfinitePreloader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}
  >
    <Preloader size="large" />
  </div>
);

export default InfinitePreloader;
