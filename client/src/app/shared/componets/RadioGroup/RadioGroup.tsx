import * as React from 'react';
import { Radio } from 'antd';

import styles from './RadioGroup.module.scss';
import { RadioGroupStyled } from './theme';

interface IData {
  id: number;
  label?: string;
  value: number | string;
}

interface IProps {
  label: string;
  data: IData[];
  onClick?: (e: any) => void;
  isSetI18N?: boolean;
  defaultValue?: any;
  color?: string;
}

/**
 * Кастомная группа радио кнопок для работы формах приложения
 *
 * @returns
 */
const RadioGroup: React.FC<IProps> = props => {
  const {
    label = '',
    data,
    onClick,
    isSetI18N = false,
    defaultValue = null,
    color: mainTextColor = '',
  } = props;

  return (
    <>
      {label !== '' && <div className={styles.radioGroupLabel}>{label}</div>}
      <RadioGroupStyled buttonStyle="solid" defaultValue={defaultValue}>
        {data.map((item: IData) => {
          const { id, value: label } = item;

          return (
            <Radio.Button
              key={id}
              value={id}
              onClick={onClick}
              style={{
                color: mainTextColor === '' ? '#66acac' : mainTextColor,
              }}
            >
              <>{label}</>
            </Radio.Button>
          );
        })}
      </RadioGroupStyled>
    </>
  );
};

export default RadioGroup;
