import React, { Component } from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';

import RootLayout from '../RootLayout';

import City from '../../shared/containers/City';
import FavouritesDashboard from '../../shared/containers/FavouritesDashboard';

// NB: ErrorBoundary нужно импортировать последним из shared
// иначе возможны конфликты при сборке SCSS стилей
// IDEA:  https://github.com/facebook/create-react-app/issues/5372
import ErrorBoundary from '../../shared/componets/ErrorBoundary';

import styles from './Favourites.module.scss';

import { DEVICE_NETBOOKS_WIDTH } from '../../shared/constants/Defaults/constants';
import { CITIES_URL } from '../../shared/constants/Routes/constants';

const { Content } = Layout;

export class Favourites extends Component {
  state = {
    isMobile: false,
    isCDM: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.checkForMobileDevice);

    this.setState(() => ({ isCDM: true }));
    this.checkForMobileDevice();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkForMobileDevice);
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
    const { isMobile, isCDM } = this.state;

    return (
      <RootLayout>
        <Content
          style={{
            // NB: убранно из-за необходимости получать данные по инфинит скроллу
            // height:
            //   isCDM && isMobile ? 'calc(100vh - 48px)' : 'calc(100vh - 60px)',
            backgroundColor: '#f9fafc',
          }}
        >
          <ErrorBoundary>
            <>
              {/* Mobile Header Helper */}
              <div
                className={styles.HeaderForExtraSmall}
                style={{ marginTop: isCDM && isMobile ? '48px' : '0px' }}
              />

              {/* Routing */}
              <Switch>
                {/* Dashboard */}
                <Route
                  exact
                  path={`${CITIES_URL}`}
                  component={FavouritesDashboard}
                />
                {/* Current City */}
                <Route path={`${CITIES_URL}/:ID`} component={City} />

                <Redirect path={`${CITIES_URL}*`} to={`${CITIES_URL}`} />
              </Switch>

              {/* Mobile Footer Helper */}
              <div
                style={{
                  height: '1px',
                  marginBottom: isCDM && isMobile ? '64px' : '0px',
                }}
              />
            </>
          </ErrorBoundary>
        </Content>
      </RootLayout>
    );
  }
}

export default Favourites;
