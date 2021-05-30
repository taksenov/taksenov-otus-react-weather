import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Row } from 'antd';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../../core/state';

import {
  // CABINET__WEATHER_URL,
  LOGIN_URL,
} from '../../shared/constants/Routes/constants';

// import WeatherViewLoadable from '../Weather';

import Preloader from '../../shared/componets/Preloader';

// import { authSetAuthStatusRequest } from '../../states/Auth/state/duck';
// import { data, isFetching } from '../../states/Auth/state/selectors';

export interface IAppRouterStore {
  data: any;
  isFetching: boolean;
}

export interface IAppRouterDispatch {
  authSetAuthStatusRequest: () => void;
}

/**
 * Private Router. Show content only for the authorized users
 *
 * @param {*} { component: Component, permited, ...rest }
 */
const PrivateRoute = ({ component: Component, permited, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) => {
      if (!permited) {
        return <Redirect to={LOGIN_URL} />;
      }
      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = (state: any) => ({
  data: data(state),
  isFetching: isFetching(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      authSetAuthStatusRequest,
    },
    dispatch,
  );

type IAppRouterTypes = IAppRouterDispatch & IAppRouterStore;

class AppRouter extends Component<IAppRouterTypes, any> {
  componentDidMount() {
    const { authSetAuthStatusRequest, data } = this.props;
    const { isAuthorized } = data;

    if (!isAuthorized) {
      authSetAuthStatusRequest();
    }
  }

  render() {
    const { data, isFetching } = this.props;
    const { isAuthorized } = data;

    return (
      <>
        {/* Root routes, after Loader */}
        {isFetching ? (
          <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Preloader size="large" />
          </Row>
        ) : (
          <ConnectedRouter history={history}>
            <Switch>
              {/* Weather */}
              {/* <PrivateRoute
                permited={isAuthorized}
                path={CABINET__WEATHER_URL}
                component={WeatherViewLoadable}
              /> */}
              <Redirect to={LOGIN_URL} />
            </Switch>
          </ConnectedRouter>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
