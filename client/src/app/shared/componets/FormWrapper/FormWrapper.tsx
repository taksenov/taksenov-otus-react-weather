import * as React from 'react';
import { MinusOutlined } from '@ant-design/icons';
import cx from 'classnames';
import { motion } from 'framer-motion';

import styles from './FormWrapper.module.scss';

import plusImage from './assets/images/plus.svg';

interface IProps {
  name: string;
  children?: any;
}

const containerAnimation = {
  hidden: {
    opacity: 1,
    scale: 0.95,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
};

/**
 * Обертка для формы. Модуль "Настройки"
 *
 * @param {*} props
 * @returns
 */
const FormWrapper: React.FC<IProps> = props => {
  const { children, name } = props;

  const [state, setState] = React.useState({ isFormCollapsed: true });
  const { isFormCollapsed } = state;

  function handleChangeState(name: string, value: boolean) {
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleClickTrue = React.useCallback(() => {
    handleChangeState('isFormCollapsed', true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPressTrue = React.useCallback(event => {
    if (event.key === 'Enter') {
      handleChangeState('isFormCollapsed', true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickFalse = React.useCallback(() => {
    handleChangeState('isFormCollapsed', false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPressFalse = React.useCallback(event => {
    if (event.key === 'Enter') {
      handleChangeState('isFormCollapsed', false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.formWrapper}>
      <div
        className={cx(styles.header, {
          [styles.headerCollapsed]: !isFormCollapsed,
        })}
      >
        <div className={styles.headerText}>{name}</div>
        <div className={styles.headerToggle}>
          {isFormCollapsed ? (
            <motion.div
              className={styles.collapseBtn}
              onClick={handleClickFalse}
              onKeyPress={handleKeyPressFalse}
              role="button"
              tabIndex={0}
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 1, rotate: 90 }}
            >
              <img src={plusImage} alt="+" width={20} height={20} />
            </motion.div>
          ) : (
            <motion.div
              className={styles.collapseBtn}
              onClick={handleClickTrue}
              onKeyPress={handleKeyPressTrue}
              role="button"
              tabIndex={0}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1, rotate: -90 }}
            >
              <MinusOutlined
                style={{
                  color: '#66acac',
                  width: '20px',
                  height: '20px',
                }}
              />
            </motion.div>
          )}
        </div>
      </div>

      <>
        {!isFormCollapsed && (
          <motion.div
            className={styles.content}
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        )}
      </>
    </div>
  );
};

export default FormWrapper;
