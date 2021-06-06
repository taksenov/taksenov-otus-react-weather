import * as React from 'react';

import styles from './CustomTooltip.module.scss';

/**
 * Кастомный тултип для графика с динамикой рейтинга
 *
 * @param {*} props
 * @returns
 */
const CustomTooltip: React.FC<any> = props => {
  const { active } = props;

  if (active) {
    const { payload } = props;
    return (
      <div className={styles.tooltip}>
        <p className={styles.label}>{`${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
