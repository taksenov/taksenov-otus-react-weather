import * as React from 'react';
import cx from 'classnames';
import { Translate } from 'react-localize-redux';

import { formatSum } from '../../utils/formatSum.helper';

import { ButtonStyled } from './theme';
import styles from './BalanceBadge.module.scss';

interface IProps {
  count: number;
}

const BalanceBadge = (props: IProps): any => {
  const { count } = props;

  let isSucces = false;
  let isDanger = false;
  let tempCount = 0;

  switch (true) {
    case count <= 0:
      isDanger = true;
      tempCount = count;
      break;
    case count > 0:
      isSucces = true;
      tempCount = count;
      break;
    default:
      isDanger = true;
  }

  return (
    <ButtonStyled>
      <p>
        <Translate id="shared.componets.balancebadge.mybalance" />
      </p>
      <div
        className={cx(styles.badge, {
          [styles.success]: isSucces,
          [styles.danger]: isDanger,
        })}
      >
        {formatSum(tempCount)}
      </div>
    </ButtonStyled>
  );
};

export default BalanceBadge;
