import React, { Component } from 'react';
import { Layout } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import styles from './ErrorBoundary.module.scss';

import { DEVICE_NETBOOKS_WIDTH } from '../../constants/Defaults/constants';
import { STYLE_THEME_ERROR_COLOR } from '../../constants/Styles/constants';

const { Content } = Layout;

interface IProps {
  children: JSX.Element;
}

/**
 * Обертка для отлавливания ошибок в модулях,
 * отправки информации об ошибке в Sentry,
 * отображения "тостера" с информацией для пользователя
 *
 * IDEA: https://ru.reactjs.org/docs/error-boundaries.html
 *
 * @export
 * @class ErrorBoundary
 * @extends {Component}
 */
class ErrorBoundary extends Component<IProps> {
  state = {
    hasError: false,
    isMobile: false,
    isCDM: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.checkForMobileDevice);

    this.setState(() => ({ isCDM: true }));
    this.checkForMobileDevice();
  }

  componentDidCatch(error: any, info: any) {
    // NB: Уведомление в консоль
    // NB: Разрешенный игнор
    // eslint-disable-next-line
    console.log('error:', error);
    // NB: Разрешенный игнор
    // eslint-disable-next-line
    console.log('info:', info);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkForMobileDevice);
  }

  static getDerivedStateFromError() {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  checkForMobileDevice = () => {
    const width = document.documentElement.clientWidth;

    if (width < DEVICE_NETBOOKS_WIDTH) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };

  render() {
    const { hasError, isMobile, isCDM } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Content style={{ backgroundColor: '#f9fafc' }}>
          {/* Mobile Header Helper */}
          <div className={styles.HeaderForExtraSmall} />

          {/* Header */}
          <div className={styles.header}>
            <span>
              <CloseCircleOutlined
                style={{ color: STYLE_THEME_ERROR_COLOR, fontSize: '28px' }}
              />{' '}
              Ошибка!
            </span>
            {/* Mobile */}
            {isCDM && isMobile && (
              <div className={styles.subHeaderMobile}>
                <span>Что-то пошло не так</span>
              </div>
            )}

            {/* Mobile */}
            {isCDM && isMobile && <div style={{ marginBottom: '15px' }} />}
          </div>

          {/* Not mobile */}
          {!(isCDM && isMobile) && (
            <div className={styles.subHeader}>
              <span>Что-то пошло не так</span>
            </div>
          )}
        </Content>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
