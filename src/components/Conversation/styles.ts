import { StyleSheet } from 'react-native';

import { Colors } from '../../config/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  conversationContainer: {
    width: '100%',
    // height: '80%',
  },
  message: {
    // maxWidth: '100%',
    // minHeight: '13%',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    borderTopWidth: .5,
    borderTopColor: Colors.EDITOR_BORDER,
  },
  textIcon: {
    width: '10%',
  },
  textBox: {
    width: '80%',
    fontSize: 19,
    marginBottom: 2,
  }

});
