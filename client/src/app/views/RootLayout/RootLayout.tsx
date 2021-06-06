import React, { useState } from 'react';
import { Layout, Grid } from 'antd';
import cx from 'classnames';

import LayoutSidebar from '../../shared/componets/LayoutSidebar';
import LayoutHeader from '../../shared/componets/LayoutHeader';
import MobilePhoneFooter from '../../shared/componets/MobilePhoneFooter';
import MobilePhoneHeader from '../../shared/componets/MobilePhoneHeader';
import MobilePhoneSidebar from '../../shared/componets/MobilePhoneSidebar';

import { getBrkPointsRules } from '../../shared/constants/LayoutBreakpoints/constants';
import {
  LAYOUT_MINIMUM_ALLOWABLE_WIDTH,
  LAYOUT_MAXIMUM_ALLOWABLE_WIDTH,
} from '../../shared/constants/Defaults/constants';

import styles from './RootLayout.module.scss';

const { useBreakpoint } = Grid;

/**
 * RootLayout -- Обертка адаптивного лейаута
 *
 * @returns
 */
const RootLayout: React.FC<any> = (props: any) => {
  const { children } = props;
  const screens = useBreakpoint();
  const { xxl, xl, lg, md, sm, xs } = screens;
  const brkPtsRules = getBrkPointsRules({ xxl, xl, lg, md, sm, xs });
  const { GREATER_THAN_LG, LESS_THAN_XL } = brkPtsRules;

  const [isSidebarCollapsed, setSidebarCollapseStatus] = useState(true);

  function handleStatusChange(status: boolean) {
    setSidebarCollapseStatus(status);
  }

  React.useEffect(() => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  // IDEA: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  React.useLayoutEffect(() => {
    const setHeightForMobilePhone = () => {
      let vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setHeightForMobilePhone);

    return () => {
      window.removeEventListener('resize', setHeightForMobilePhone);
    };
  }, []);

  return (
    <Layout
      style={{
        minWidth: `${LAYOUT_MINIMUM_ALLOWABLE_WIDTH}px`,
        maxWidth: `${LAYOUT_MAXIMUM_ALLOWABLE_WIDTH}px`,
      }}
    >
      {/* Sidebar */}
      {GREATER_THAN_LG && <LayoutSidebar />}
      {LESS_THAN_XL && (
        <MobilePhoneSidebar
          isSidebarCollapsed={isSidebarCollapsed}
          handleStatusChange={handleStatusChange}
        />
      )}

      <Layout>
        {/* Header */}
        {GREATER_THAN_LG && <LayoutHeader />}
        {LESS_THAN_XL && (
          <div className={cx({ [styles.contentBlurred]: !isSidebarCollapsed })}>
            <MobilePhoneHeader />
          </div>
        )}

        {/* Content */}
        <div className={cx({ [styles.contentBlurred]: !isSidebarCollapsed })}>
          {children}
        </div>

        {/* Footer */}
        {/* Footer for common routes */}
        {LESS_THAN_XL && (
          <>
            <div
              className={cx({
                [styles.contentBlurred]: !isSidebarCollapsed,
              })}
            >
              <MobilePhoneFooter handleStatusChange={handleStatusChange} />
            </div>
          </>
        )}
      </Layout>
    </Layout>
  );
};

export default RootLayout;
