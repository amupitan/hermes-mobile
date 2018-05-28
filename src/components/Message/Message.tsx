import * as React from 'react';
import { Text, View, ViewStyle } from 'react-native';

import { convertTime } from '../utils';
import { constraints } from '../../config/constants';

// TODO(DEV) => {
// 1. Replaces ellipses with complete message when message is clicked
// }

import styles from './styles';

interface MessageProps {
  content: string;
  time: Date;
  sender: boolean;
  style?: ViewStyle;
}

const Message = ({ content, time, sender, style }: MessageProps) => {
  const placementStyle: ViewStyle = { alignItems: sender ? 'flex-end' : 'flex-start' };

  return (
    <View style={[styles.container, style, placementStyle]}>
      <Bubble {...{ content, time }} style={sender ? styles.senderContainer : styles.receiverContainer} />
    </View>
  );
};

const Bubble = ({ content, time, style }: { content: string, time: Date, style: ViewStyle }) => (
  <View style={[styles.bubbleContainer, style]}>
    <Text style={styles.bubbleText} >{formatLength(content)}</Text>
    <Text style={styles.bubbleTime}>{convertTime(time)}</Text>
  </View>
);

/**
 * Shortens a string and adds ellipses if it's too long
 * @param text the string to be formatted
 * @returns the formatted string
 */
const formatLength = (text: string): string => {
  let formatted = text.substr(0, constraints.MAX_BUBBLE_TEXT_DISPLAY_LEN);
  if (text.length > constraints.MAX_BUBBLE_TEXT_DISPLAY_LEN)
    formatted += '\n...';
  return formatted;
};

export default Message;


