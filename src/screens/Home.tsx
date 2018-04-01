import * as React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import { HermesRoutes } from '../config/constants';
import homeRoutes, { DEFAULT_ROUTE_PATH } from '../config/routes';

import Header from '../components/Header';
import Nav from '../components/Nav';

import styles from './styles';

interface HomeProps {
  location: { pathname: string }
}

const Home = ({ location: { pathname } }: HomeProps) => {
  const name = (pathname === HermesRoutes.HOME ? DEFAULT_ROUTE_PATH : pathname);
  return (
    <View>
      <Header style={styles.homeHeader} {...{ name }} />
      <View style={styles.custom}>
        <Switch>
          {
            homeRoutes.map(({ exact, path, component }, i) => (
              <Route key={`home-route-${i}`} {...{ exact, path, component }} />
            ))
          }
          <Redirect to={{ pathname: DEFAULT_ROUTE_PATH }} />
        </Switch>
      </View>
      <Nav style={styles.homeNav} active={name.substring(1)} />
    </View >
  );
};

export default Home;
