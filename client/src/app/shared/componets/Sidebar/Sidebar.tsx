import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Menu, Input } from 'antd';
import { Link } from 'react-router-dom';

import { SearchOutlined } from '@ant-design/icons';

import { pathname as pathnameSelector } from '../../../states/Router/state/selectors';

import logoImage from './assets/images/logo.svg';
import articleImage from './assets/images/file.svg';
import articleActiveImage from './assets/images/file-a.svg';
import commentImage from './assets/images/comment.svg';
import commentActiveImage from './assets/images/comment-a.svg';

import { SiderStyled } from './theme';

import styles from './Sidebar.module.scss';

import {
  FEEDBACKS_URL,
  CITIES_URL,
} from '../../../shared/constants/Routes/constants';

interface IProps {
  isMobile: boolean;
}

// FIXME: Временно для продакшена
const TEMP_UNDER_CONSTRUCTION = true;

/**
 * Кастомный сайдбар на основе Ant Design
 *
 * @returns
 */
const Sidebar: React.FC<IProps> = props => {
  const { isMobile = false } = props;
  const [selectedMenuItemKey, setSelectedMenuItem] = useState();
  const pathname = useSelector(pathnameSelector);

  function handleMenuItemChange(params: any) {
    const { key } = params;

    setSelectedMenuItem(key);
  }

  useEffect(() => {
    handleMenuItemChange({ key: pathname });
  }, [pathname]);

  return (
    <SiderStyled
      theme="light"
      className={styles.sidebar}
      style={{
        overflow: 'auto',
        position: isMobile ? 'relative' : 'fixed',
        left: 0,
      }}
    >
      {!isMobile && (
        <div className={styles.logoWrapper}>
          <a href="/cities">
            <img
              src={logoImage}
              className={styles.logo}
              alt="Logo"
              height={50}
            />
          </a>
        </div>
      )}

      {isMobile && !TEMP_UNDER_CONSTRUCTION && (
        <div className={styles.searchInputWrapper}>
          <Input
            style={{ margin: 0, marginRight: '20px' }}
            className={styles.searchInput}
            placeholder="Поиск..."
            suffix={<SearchOutlined />}
          />
        </div>
      )}

      <Menu
        style={{ width: '100%', height: '100vh' }}
        defaultSelectedKeys={pathname}
        mode="inline"
        onSelect={params => handleMenuItemChange({ ...params, pathname })}
        selectedKeys={selectedMenuItemKey}
      >
        {/* Список городов */}
        <Menu.Item key={CITIES_URL}>
          <div className={styles.menuImageWrapper}>
            {selectedMenuItemKey === `${CITIES_URL}` ? (
              <img src={articleActiveImage} alt="📄" />
            ) : (
              <img src={articleImage} alt="📄" />
            )}
          </div>

          <Link to={CITIES_URL}>Города</Link>
        </Menu.Item>

        {/* Избранное */}
        <Menu.Item key={FEEDBACKS_URL}>
          <div className={styles.menuImageWrapper}>
            {selectedMenuItemKey === `${FEEDBACKS_URL}` ? (
              <img src={commentActiveImage} alt="🗨" />
            ) : (
              <img src={commentImage} alt="🗨" />
            )}
          </div>

          <Link to={FEEDBACKS_URL}>Избранное</Link>
        </Menu.Item>
      </Menu>
    </SiderStyled>
  );
};

export default Sidebar;
