/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import * as React from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';

import { FooterStyled } from './theme';
import styles from './MobilePhoneFooter.module.scss';

import burgerImage from './assets/images/burger.svg';

import { LAYOUT_MINIMUM_ALLOWABLE_WIDTH } from '../../constants/Defaults/constants';

interface IProps {
  handleStatusChange: (status: boolean) => void;
}

/**
 * Футер для мобильных телефонов
 *
 * @returns
 */
const MobilePhoneFooter: React.FC<IProps> = props => {
  const { handleStatusChange } = props;
  const windowSize = useWindowSize();
  const { width = 0 } = windowSize;

  // NB: По умолчанию считаем что запущено на устройстве с шириной экрана шире чем 320px
  let isNormalSize = true;

  if (width < LAYOUT_MINIMUM_ALLOWABLE_WIDTH) {
    isNormalSize = false;
  }

  return (
    <FooterStyled
      style={{
        position: isNormalSize ? 'fixed' : 'unset',
        bottom: 0,
        width: '100%',
        zIndex: 100,
      }}
    >
      {/* Меню */}
      <div
        className={styles.buttonBlock}
        onClick={() => handleStatusChange(false)}
      >
        <img
          src={burgerImage}
          className={styles.labelImage}
          width={24}
          alt="burgerImage"
        />
        <span className={styles.labelText}>Меню</span>
      </div>
    </FooterStyled>
  );
};

export default MobilePhoneFooter;
