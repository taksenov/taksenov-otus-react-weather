import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppInit from '../AppInit';

const ApplicationWrapper = () => {
  return (
    <BrowserRouter>
      <AppInit />
    </BrowserRouter>
  );
};

export default ApplicationWrapper;
