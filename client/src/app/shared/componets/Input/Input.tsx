/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
import cx from 'classnames';
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';

import styles from './Input.module.scss';
import { InputStyled } from './theme';

import goodImage from './assets/images/good.svg';

interface IProps {
  isError?: boolean;
  isGood?: boolean;
  label: string;
  placeholder: string;
  isSuffix?: boolean;
  isSearch?: boolean;
  suffix?: string;
  longLabel?: boolean;
  name?: string;
  onChange?: (e: any) => void;
  defaultValue?: any;
  value?: any;
  type?: string;
  autoComplete?: string;
  inputMode?:
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;
  style?: Record<string, string>;
  autoFocus?: boolean;
  onKeyUp?: (e: any) => void;
  onKeyDown?: (e: any) => void;
}

/**
 * Кастомный инпут для работы внутри Formik
 *
 * @param {boolean} longLabel?: когда нужно разместить в строку слишком длинный label
 *
 * @returns
 */
const Input: React.FC<IProps> = props => {
  const {
    isError,
    isGood,
    label,
    placeholder,
    isSuffix,
    suffix,
    longLabel = false,
    onChange,
    defaultValue,
    value,
    isSearch,
    type = 'text',
    inputMode = 'text',
    style = null,
    autoComplete = 'off',
    autoFocus = false,
    onKeyUp,
    onKeyDown,
  } = props;

  return (
    <>
      {label !== '' && (
        <div
          className={cx(styles.inputLabel, { [styles.longLabel]: longLabel })}
        >
          {label}
        </div>
      )}
      <div className={styles.inputWrapper}>
        {type === 'password' ? (
          <InputStyled.Password
            className={cx(styles.inputUsual, {
              [styles.error]: isError,
              [styles.good]: isGood,
            })}
            style={{ ...style, fontSize: '13px' }}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            value={value}
            autoComplete={autoComplete}
            visibilityToggle={false}
          />
        ) : (
          <InputStyled
            className={cx(styles.inputUsual, {
              [styles.error]: isError,
              [styles.good]: isGood,
            })}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            value={value}
            inputMode={inputMode}
            style={{ ...style }}
            autoFocus={autoFocus}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
          />
        )}

        <div className={styles.suffix}>
          <>
            {isSuffix && <span>{suffix}</span>}
            {isError && <InfoCircleOutlined style={{ color: '#e24848' }} />}
            {isSearch && <SearchOutlined style={{ color: '#66ACAC' }} />}
            {isGood && <img src={goodImage} height={11} alt="." />}
          </>
        </div>
      </div>
    </>
  );
};

export default Input;
