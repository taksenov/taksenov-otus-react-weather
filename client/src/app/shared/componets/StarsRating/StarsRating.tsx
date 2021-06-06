/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import { Translate } from 'react-localize-redux';

import starFullImage from './assets/images/starFull.svg';
import starEmptyImage from './assets/images/starEmpty.svg';

import styles from './StarsRating.module.scss';

interface IProps {
  rating: number;
  count?: number;
  ratingOrder?: number;
}

/**
 * Рендерит рейтинг в виде звездочек
 *
 * @param {*} props
 * @returns
 */
const StarsRating: React.FC<IProps> = props => {
  const { rating, count = -1, ratingOrder = 5 } = props;
  const iter = new Array(ratingOrder).fill(0);

  return (
    <>
      <div className={styles.wrapper}>
        {iter.map((item: number, index: number) => (
          <img
            key={`${item}__${index}`}
            src={rating >= index + 1 ? starFullImage : starEmptyImage}
            alt="star"
          />
        ))}
        {count >= 0 && (
          <span>
            {count}{' '}
            <Translate id="src_app_shared_componets_credit_rating_element_feedbacks" />
          </span>
        )}
      </div>
    </>
  );
};

export default StarsRating;
