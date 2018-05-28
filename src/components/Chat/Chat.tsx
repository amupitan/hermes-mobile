import * as React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { Avatar, Badge, Icon } from 'react-native-elements';

import { convertTime } from '../utils';
import { constraints } from '../../config/constants';

import styles from './styles';

interface ConvoProps {
  name: string;
  message: string;
  notification: number;
  imageUri?: string;
  time: Date;
  style?: ViewStyle;
}

const ARROW_ICO_SIZE = 25;

// TODO(DEV) get uri from props
const URI = 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg';

/**
 * A link to a conversation
 * @param ConvoProps 
 */
const Convo = ({ name, message, notification, time, imageUri = URI, style }: ConvoProps) => (
  <View style={[styles.container, style]} >
    <View style={styles.avatarContainer}>
      {/* TODO(UX) get size and opacity externally */}
      <Avatar rounded size='medium' source={{ uri: imageUri }} activeOpacity={0.7} />
    </View>
    <View style={styles.nameAndMessage}>
      {/* TODO(DEV) change color of message to grey-ish */}
      <Text style={styles.name}>{name}</Text>
      {/* TODO(UX) 1. don't hard-code 60, 2. add ellipses if message is not complete */}
      <Text style={styles.message}>{message.substring(0, constraints.MAX_CONVO_TEXT_DISPLAY_LEN)}</Text>
    </View>
    <View style={styles.timeAndNotify}>
      <Text style={styles.time}>{convertTime(time)}</Text>
      <View style={styles.notification}>
        {notification > 0 && <Badge
          value={notification}
          textStyle={styles.notificationValue}
          containerStyle={styles.notificationIcon} />}
        <Icon
          name='keyboard-arrow-right'
          size={ARROW_ICO_SIZE}
          iconStyle={styles.arrow} />
      </View>
    </View>
  </View>
);

export default Convo;
