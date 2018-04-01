import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { Link } from 'react-router-native';
import { Icon } from 'react-native-elements';

import { Colors, HermesRoutes } from '../../config/constants';
import styles from './styles';

const ICO_SIZE = 30;

const NavIcon = ({ name, active = true }: { name: string, active?: boolean }) => (
  <Icon
    name={name}
    size={ICO_SIZE}
    iconStyle={styles.iconStyle}
    color={active ? Colors.ICON_HIGHLIGHT : Colors.ICON} />
);

const Nav = ({ style, active }: { style?: ViewStyle, active: string }) => (
  <View style={[styles.nav, style]}>
    {/* TODO(DEV): handle highlist for a conversation */}
    <Link
      to={HermesRoutes.MESSAGES}
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <NavIcon name='message' active={active === 'messages'} />
    </Link>
    <Link
      // TODO(DEV) change back to contacts
      to={HermesRoutes.CONVERSATION}
      underlayColor='#f0f4f7'
      style={styles.navItem} >
      <NavIcon name='person-add' active={active === 'contacts'} />
    </Link>
    <Link
      to={HermesRoutes.SIGNUP}
      underlayColor='#f0f4f7'
      style={styles.navItem} >
      <NavIcon name='person-outline' active={active === 'extra'} />
    </Link>
    <Link
      to={HermesRoutes.LOGIN}
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <NavIcon name='person-pin' active={active === 'languages'} />
    </Link>
    <Link
      to={HermesRoutes.SETTINGS}
      underlayColor='#f0f4f7'
      style={styles.navItem}>
      <NavIcon name='settings' active={active === 'settings'} />
    </Link>
  </View>
);

export default Nav;
