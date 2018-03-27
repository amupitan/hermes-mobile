import * as React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { Avatar, Badge, Icon } from 'react-native-elements';

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
 * Converts a JS DateTime object to a string of formar hh:mm AM/PM
 * TODO(DEV) don't force 'en-US' locale. Use the user's locale
 * @param time JS DateTime to be converted
 * @returns {string}
 */
const convertTime = (time: Date) => time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

const Convo = ({ name, message, notification, time, imageUri = URI, style }: ConvoProps) => (
  <View style={[styles.container, style]}>
    <View style={styles.avatarContainer}>
      <Avatar rounded medium source={{ uri: imageUri }} activeOpacity={0.7} containerStyle={{}} />
    </View>
    <View style={styles.nameAndMessage}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{message}</Text>
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
