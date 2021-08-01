import * as React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import truncate from 'lodash/truncate';
import moment from 'moment';

import { useWindowSize } from '../../hooks/useWindowSize';

import { DEVICE_NETBOOKS_WIDTH } from '../../constants/Defaults/constants';

import styles from './FavouriteCityCard.module.scss';

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
const FavouriteCityCard: React.FC<IProps> = props => {
  const { header, shortText, id } = props;

  const windowSize = useWindowSize();
  const { width = 0 } = windowSize;

  let isMobile = false;

  if (width < DEVICE_NETBOOKS_WIDTH) {
    isMobile = true;
  }

  return (
    <>
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
    </>
  );
};

export default FavouriteCityCard;
