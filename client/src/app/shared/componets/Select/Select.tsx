/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
import cx from 'classnames';

import styles from './Select.module.scss';
import { SelectStyled } from './theme';

import selectArrowImage from './assets/images/selectArrow.svg';

const { Option } = SelectStyled;

interface IData {
  id: number;
  value: number | string;
}

interface IProps {
  isError: boolean;
  isGood: boolean;
  label: string;
  placeholder: string;
  longLabel?: boolean;
  data: IData[];
  onChange?: (value: any) => void;
  filterOption?: any;
  showSearch?: boolean;
  defaultValue?: any;
  value?: any;
  isSetI18N?: boolean;
}

/**
 * Кастомный селект для работы внутри Formik
 *
 * @returns
 */
const Select: React.FC<IProps> = props => {
  const {
    isError,
    isGood,
    label,
    longLabel = false,
    placeholder,
    data,
    onChange,
    filterOption,
    showSearch,
    defaultValue,
    value,
    isSetI18N = false,
  } = props;

  return (
    <>
      {label !== '' && (
        <div className={cx(styles.label, { [styles.longLabel]: longLabel })}>
          {label}
        </div>
      )}
      <SelectStyled
        placeholder={placeholder}
        style={{ width: '100%' }}
        className={cx({
          [styles.error]: isError,
          [styles.good]: isGood,
        })}
        onChange={onChange}
        suffixIcon={
          <>
            <img src={selectArrowImage} height={13} alt="." />
          </>
        }
        showSearch={showSearch}
        filterOption={(input, option) => filterOption(input, option)}
        defaultValue={defaultValue}
        value={value}
      >
        {data.map((item: IData) => {
          const { id, value: label } = item;

          return (
            <Option key={id} value={id}>
              <>{label}</>
            </Option>
          );
        })}
      </SelectStyled>
    </>
  );
};

export default Select;
