import * as React from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import cx from 'classnames';

import Sidebar from '../Sidebar';

import styles from './MobilePhoneSidebar.module.scss';
import { SiderStyled } from './theme';

interface IProps {
  isSidebarCollapsed: boolean;
  handleStatusChange: (status: boolean) => void;
}

/**
 * Обертка мобильного сайдбара
 *
 * @returns
 */
const MobilePhoneSidebar: React.FC<IProps> = props => {
  const { isSidebarCollapsed, handleStatusChange } = props;

  return (
    <SiderStyled
      trigger={null}
      breakpoint="xl"
      collapsedWidth="0"
      collapsed={isSidebarCollapsed}
    >
      <Button
        ghost
        shape="round"
        style={{
          position: 'fixed',
          zIndex: 200,
          left: '240px',
          top: '20px',
          width: '38px',
          height: '38px',
        }}
        onClick={() => handleStatusChange(true)}
        className={cx(styles.closeButton, {
          [styles.buttonHidden]: isSidebarCollapsed,
        })}
      >
        <CloseOutlined
          className={styles.labelImage}
          style={{ color: '#FFFFFF', fontSize: '14px' }}
        />
      </Button>

      <Sidebar isMobile />
    </SiderStyled>
  );
};

export default MobilePhoneSidebar;
