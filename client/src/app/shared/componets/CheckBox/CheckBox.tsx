import * as React from 'react';

import styles from './CheckBox.module.scss';
import { CheckBoxStyled } from './theme';

interface IProps {
  label: string;
  onChange?: (event: any) => void;
  name?: string;
  checked?: boolean;
}

/**
 * Кастомный чекбокс для работы внутри Formik
 *
 * @returns
 */
const CheckBox: React.FC<IProps> = props => {
  const { label, onChange, name, checked } = props;

  return (
    <>
      <CheckBoxStyled onChange={onChange} name={name} checked={checked}>
        <span className={styles.labelText}>{label}</span>
      </CheckBoxStyled>
    </>
  );
};

export default CheckBox;
