import * as React from 'react';
import cx from 'classnames';

import { useWindowSize } from '../../hooks/useWindowSize';

import { HeaderStyled } from './theme';
import styles from './MobilePhoneHeader.module.scss';

import logoImage from './assets/images/logo.svg';

import { LAYOUT_MINIMUM_ALLOWABLE_WIDTH } from '../../constants/Defaults/constants';

/**
 * Хеадер для мобильных телефонов
 *
 * @returns
 */
const MobilePhoneHeader: React.FC = () => {
  const windowSize = useWindowSize();
  const { width = 0 } = windowSize;

  let isNormalSize = true;

  if (width < LAYOUT_MINIMUM_ALLOWABLE_WIDTH) {
    isNormalSize = false;
  }

  return (
    <HeaderStyled
      style={{
        position: isNormalSize ? 'fixed' : 'unset',
        width: '100%',
      }}
    >
      {/* Logo */}
      <a className={cx(styles.logo)} href="/">
        <img src={logoImage} alt="Logo" />
      </a>
    </HeaderStyled>
  );
};

export default MobilePhoneHeader;
