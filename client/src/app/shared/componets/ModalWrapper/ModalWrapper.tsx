import * as React from 'react';
import { motion } from 'framer-motion';

import { useWindowSize } from '../../hooks/useWindowSize';

import styles from './ModalWrapper.module.scss';
import { ModalStyled } from './theme';

import closeImage from './assets/images/close.svg';

import { DEVICE_MOBILE_WIDTH_480 } from '../../constants/Defaults/constants';

interface IProps {
  isModalVisible: boolean;
  handleModalStatusChange: (status: boolean) => void;
  width: number;
}

/**
 * Модальное окно-обертка с простой функциональностью
 *
 * @param {*} props
 * @returns
 */
const ModalWrapper: React.FC<IProps> = props => {
  const {
    isModalVisible,
    handleModalStatusChange,
    children,
    width: modalWindowWidth,
  } = props;
  const windowSize = useWindowSize();
  const { width = 0 } = windowSize;

  let isMobile = false;

  if (width < DEVICE_MOBILE_WIDTH_480) {
    isMobile = true;
  }

  // Положение кнопки в зависимости от заданной ширины
  const rightOffset = `${-modalWindowWidth + 5}px`;

  return (
    <ModalStyled
      centered
      width={isMobile ? 260 : modalWindowWidth}
      visible={isModalVisible}
      onOk={() => handleModalStatusChange(false)}
      onCancel={() => handleModalStatusChange(false)}
      footer={[null]}
      destroyOnClose
      maskClosable={false}
    >
      <div className={styles.wrapper}>
        <div className={styles.closeButton}>
          <motion.div
            style={{
              right: isMobile ? '-254px' : rightOffset,
              top: '-48px',
            }}
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8, rotate: -180 }}
            onClick={() => handleModalStatusChange(false)}
          >
            <img src={closeImage} alt="Close" />
          </motion.div>
        </div>

        {children}
      </div>
    </ModalStyled>
  );
};

export default ModalWrapper;
