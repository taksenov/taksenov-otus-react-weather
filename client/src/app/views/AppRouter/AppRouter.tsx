import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../../core/state';

import {
  CITIES_URL,
  NOOP_URL,
  FAVOURITES_URL,
} from '../../shared/constants/Routes/constants';

import CitiesViewLoadable from '../Cities';
import FavouritesViewLoadable from '../Favourites';

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
        return <Redirect to={NOOP_URL} />;
      }
      return <Component {...props} />;
    }}
  />
);

class AppRouter extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={NOOP_URL} component={() => <>404 error</>} />

          {/* Weather */}
          <PrivateRoute
            permited
            path={CITIES_URL}
            component={CitiesViewLoadable}
          />

          {/* Favourites */}
          <PrivateRoute
            permited
            path={FAVOURITES_URL}
            component={FavouritesViewLoadable}
          />
          <Redirect to={CITIES_URL} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default AppRouter;
