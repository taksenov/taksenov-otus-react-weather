import * as React from 'react';
import { Layout } from 'antd';

import Sidebar from '../Sidebar';

import styles from './LayoutSidebar.module.scss';

const { Sider } = Layout;

/**
 * Обертка сайдбара
 *
 * @returns
 */
const LayoutSidebar: React.FC<any> = () => {
  return (
    <Sider
      className={styles.sider}
      style={{
        flex: '0 0 225px',
        maxWidth: '225px',
        minWidth: '225px',
        width: '225px',
      }}
    >
      <Sidebar isMobile={false} />
    </Sider>
  );
};

export default LayoutSidebar;
