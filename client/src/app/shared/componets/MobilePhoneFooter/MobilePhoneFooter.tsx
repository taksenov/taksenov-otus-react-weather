/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import * as React from 'react';
import { Translate } from 'react-localize-redux';
import { Link } from 'react-router-dom';

import { useWindowSize } from '../../hooks/useWindowSize';

import { FooterStyled } from './theme';
import styles from './MobilePhoneFooter.module.scss';

import burgerImage from './assets/images/burger.svg';
import cashbackImage from './assets/images/cashback.svg';
import userImage from './assets/images/user.svg';
import headphonesImage from './assets/images/headphones.svg';
import creditCardImage from './assets/images/creditСard.svg';

import { LAYOUT_MINIMUM_ALLOWABLE_WIDTH } from '../../constants/Defaults/constants';
import {
  CABINET__CREDIT_RATING_URL,
  HELP_LOAN_SELECTION_URL,
  HELP_LAWYER_URL,
  HELP_SUPPORT_URL,
} from '../../constants/Routes/constants';

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
        <span className={styles.labelText}>
          <Translate id="shared_componets_mobilephonefooter_menu" />
        </span>
      </div>

      {/* Главная */}
      <div className={styles.buttonBlock}>
        <Link
          to={CABINET__CREDIT_RATING_URL}
          style={{
            color: '#73797f',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={userImage}
            className={styles.labelImage}
            width={24}
            alt="userImage"
          />
          <span className={styles.labelText}>
            <Translate id="shared_componets_mobilephonefooter_cabinet" />
          </span>
        </Link>
      </div>

      {/* Кредит */}
      <div className={styles.buttonBlock}>
        <Link
          to={HELP_LOAN_SELECTION_URL}
          style={{
            color: '#73797f',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={creditCardImage}
            className={styles.labelImage}
            width={24}
            alt="cashbackImage"
          />
          <span className={styles.labelText}>
            <Translate id="shared_componets_mobilephonefooter_loan" />
          </span>
        </Link>
      </div>

      {/* Юрист */}
      <div className={styles.buttonBlock}>
        <Link
          to={HELP_LAWYER_URL}
          style={{
            color: '#73797f',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={cashbackImage}
            className={styles.labelImage}
            width={24}
            alt="cashbackImage"
          />
          <span className={styles.labelText}>
            <Translate id="shared_componets_mobilephonefooter_lawyer" />
          </span>
        </Link>
      </div>

      {/* Помощь */}
      <div className={styles.buttonBlock}>
        <Link
          to={HELP_SUPPORT_URL}
          style={{
            color: '#73797f',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={headphonesImage}
            className={styles.labelImage}
            width={24}
            alt="headphonesImage"
          />
          <span className={styles.labelText}>
            <Translate id="shared_componets_mobilephonefooter_help" />
          </span>
        </Link>
      </div>
    </FooterStyled>
  );
};

export default MobilePhoneFooter;
