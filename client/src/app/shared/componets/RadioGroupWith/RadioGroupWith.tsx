import * as React from 'react';
import { Radio } from 'antd';
// import { Translate } from 'react-localize-redux';

import styles from './RadioGroupWith.module.scss';
import { RadioGroupStyled } from './theme';

interface IData {
  id: number;
  renderElem?: JSX.Element;
  value: number | string;
}

interface IProps {
  label: string;
  data: IData[];
  onClick?: (e: any) => void;
  isSetI18N?: boolean;
  defaultValue?: any;
}

/**
 * Кастомная группа радио кнопок в которой рендерится произвольный JSX (children)
 *
 * @returns
 */
const RadioGroupWith: React.FC<IProps> = props => {
  const {
    label = '',
    data,
    onClick,
    // isSetI18N = false,
    defaultValue = null,
  } = props;

  return (
    <>
      {label !== '' && <div className={styles.radioGroupLabel}>{label}</div>}
      <RadioGroupStyled buttonStyle="solid" defaultValue={defaultValue}>
        {data.map((item: IData) => {
          const { id, renderElem } = item;

          return (
            <Radio.Button key={id} value={id} onClick={onClick}>
              {renderElem}
            </Radio.Button>
          );
        })}
      </RadioGroupStyled>
    </>
  );
};

export default RadioGroupWith;
