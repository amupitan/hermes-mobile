import * as React from 'react';
import { View, Text, ViewStyle } from 'react-native';

import { toTitleCase } from '../utils';

import styles from './styles';

const Header = ({ name = 'Hermes', style }: { name: string, style?: ViewStyle }) => (
  <View style={[styles.container, style]}>
    {/* TODO(UX) add prop option to render icon */}
    <Text style={styles.headerText}>{formatHeader(name)}</Text>
  </View >
);

/**
 * Removes the second slash and everything after it from the header text and returns it title cased
 * @param header the header text
 */
const formatHeader = (header: string) => {
  let stopIndex = header.indexOf('/', 1);
  if (stopIndex === -1) stopIndex = header.length;
  return toTitleCase(header.substring(1, stopIndex));
};

export default Header;
