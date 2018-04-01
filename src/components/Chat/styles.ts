import { StyleSheet } from 'react-native';

import { Colors } from '../../config/constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    borderBottomColor: Colors.SEPARATOR,
    borderBottomWidth: 0.5,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '19%',
  },
  nameAndMessage: {
    flexDirection: 'column',
    width: '63%',
    height: '100%',
  },
  name: {
    flex: 1,
    fontWeight: '600',
    fontSize: 17,
    marginTop: '3%',
  },
  message: {
    marginTop: '1%',
    flex: 2,
  },
  timeAndNotify: {
    flexDirection: 'column',
    width: '18%',
    alignItems: 'center',
    height: '100%',
  },
  time: {
    alignSelf: 'center',
    marginTop: '8%',
    flex: 1,
    color: Colors.TIME_TEXT,
  },
  notification: {
    flex: 2,
    marginTop: '14%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  notificationIcon: {
    backgroundColor: Colors.NOTIFICATION_BG,
  },
  notificationValue: {
    color: Colors.NOTIFICATION_VAL,
  },
  arrow: {
    color: Colors.ICON,
  },
});
