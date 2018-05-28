import { StyleSheet } from 'react-native';

import { Colors } from '../../config/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    borderTopWidth: .5,
    borderTopColor: Colors.EDITOR_BORDER,
  },
  textIcon: {
    width: '10%',
  },
  keyboard: {
    flex: 1,
    flexDirection: 'column',
  },
  textBoxContainer: {
    height: '100%',
    flex: 1,
    width: '80%',
    padding: '1%',
    flexDirection: 'row',
  },
  textBox: {
    width: '99%',
    fontSize: 19,
    paddingLeft: '1%',
    paddingRight: '1%',
    borderRadius: 10,
    borderColor: 'pink',
    borderWidth: 2,
  }

});
