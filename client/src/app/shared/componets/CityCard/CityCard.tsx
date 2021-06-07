import * as React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import truncate from 'lodash/truncate';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { useWindowSize } from '../../hooks/useWindowSize';

import { DEVICE_NETBOOKS_WIDTH } from '../../constants/Defaults/constants';
import { CITIES_URL } from '../../constants/Routes/constants';

import styles from './CityCard.module.scss';

interface IProps {
  header: string;
  shortText: string;
  id: number;
}

/**
 * Карточка статьи.
 * Является ссылкой на переход в саму статью
 *
 * @returns
 */
const CityCard: React.FC<IProps> = props => {
  const { header, shortText, id } = props;

  const windowSize = useWindowSize();
  const { width = 0 } = windowSize;

  let isMobile = false;

  if (width < DEVICE_NETBOOKS_WIDTH) {
    isMobile = true;
  }

  return (
    <>
      <Link to={`${CITIES_URL}/${id}`}>
        <div className={styles.wrapper}>
          {/* Info */}
          <div className={styles.infoWrapper}>
            {/* Header */}
            <div className={styles.header}>
              {truncate(header, {
                length: isMobile ? 30 : 34,
                separator: /,? +/,
              })}
            </div>
            {/* Date */}
            <div className={styles.date}>
              <CalendarOutlined
                style={{
                  fontSize: '13px',
                  color: '#73797F',
                  marginRight: '5px',
                }}
              />
              <span>{moment(Date.now()).format('DD.MM.YYYY hh:mm')}</span>
            </div>
            {/* Text */}
            <div className={styles.shortText}>
              {truncate(shortText, {
                length: isMobile ? 120 : 175,
                separator: /,? +/,
              })}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CityCard;
