import * as React from 'react';

import AppHeader from '../AppHeader';

import { HeaderStyled } from './theme';
import styles from './LayoutHeader.module.scss';

/**
 * Обертка хеадера shared/components/AppHeader
 *
 * @returns
 */
const LayoutHeader: React.FC = () => {
  return (
    <HeaderStyled className={styles.header}>
      <AppHeader />
    </HeaderStyled>
  );
};

export default LayoutHeader;
