import { StyleSheet } from 'react-native';

import { Colors } from '../../config/constants';

const bubbleRadius = 6;

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
  },
  senderContainer: {
    backgroundColor: Colors.SEND_BUBBLE,
  },
  receiverContainer: {
    backgroundColor: Colors.RECEIVE_BUBBLE,
  },
  bubbleContainer: {
    maxWidth: '67%',
    margin: '3%',
    borderTopLeftRadius: bubbleRadius,
    borderTopRightRadius: bubbleRadius,
    borderBottomLeftRadius: bubbleRadius,
    borderBottomRightRadius: bubbleRadius,
    padding: '3%',
  },
  bubbleText: {
    color: 'white',
    fontSize: 16,
  },
  bubbleTime: {
    fontSize: 8,
    alignSelf: 'flex-end',
  },
});
