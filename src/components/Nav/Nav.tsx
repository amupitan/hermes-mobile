import * as React from 'react';
import { Text, View } from 'react-native';
import { Link, Route } from 'react-router-native';

import Messages from '../Messages';
import Settings from "../Settings";
import createChat from '../createChat';

import styles from './styles';

const Nav = (props: {}) => (
  <View>
    <View style={styles.nav}>
      <Link
        to="/messages"
        underlayColor='#f0f4f7'
        style={styles.navItem}>
        <Text>Messages</Text>
      </Link>
      <Link
        to="/settings"
        underlayColor='#f0f4f7'
        style={styles.navItem}>
        <Text>Settings</Text>
      </Link>
      <Link
        to="/createChat"
        underlayColor='#f0f4f7'
        style={styles.navItem} >
        <Text>Add Message</Text>
      </Link>
      <Link
        to="/signup"
        underlayColor='#f0f4f7'
        style={styles.navItem} >
        <Text>Sign Up</Text>
      </Link>
    </View>
  </View>
);

export default Nav;
