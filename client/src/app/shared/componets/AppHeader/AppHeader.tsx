import * as React from 'react';

import { HeaderStyled } from './theme';

const SIDEBAR_WIDTH = '225px';

/**
 * Хеадер приложения. Десктоп версия
 */
const AppHeader: React.FC = () => {
  return (
    <HeaderStyled
      style={{
        position: 'fixed',
        width: `calc(100% - ${SIDEBAR_WIDTH})`,
      }}
    />
  );
};

export default AppHeader;
