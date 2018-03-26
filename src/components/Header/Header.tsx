import * as React from 'react';
import { View, Text, ViewStyle } from 'react-native';

import styles from './styles';

const Header = ({ name = 'Hermes', style }: { name: string, style?: ViewStyle }) => (
  <View style={[styles.container, style]}>
    {/* TODO(UX) add prop option to render icon */}
    <Text style={styles.headerText}>{name}</Text>
  </View >
);
export default Header;
