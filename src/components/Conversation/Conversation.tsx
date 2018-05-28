import * as React from 'react';
import { Animated, EmitterSubscription, FlatList, Keyboard, TextInput, View, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';

// TODO(DEV) use real data
import Message from '../Message';
import { user1, convos } from '../utils/convos';

import styles from './styles';

interface DisplayKeyboardEvent {
  duration: number;
  endCoordinates: { height: number };
}

// TODO(DEV) get this info from a lib call
const user = user1;
const convoId: number = user1.convos[0];
const convo = convos[convoId];

/**
 * A view of messages across users
 */
class Conversation extends React.Component {

  keyboardHeight: Animated.Value;
  keyboardWillShowSub: EmitterSubscription | null;
  keyboardWillHideSub: EmitterSubscription | null;
  constructor(props: React.Props<{}>) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
    this.keyboardWillShowSub = null;
    this.keyboardWillHideSub = null;
  }

  keyboardWillShow = (event: DisplayKeyboardEvent) => {
    Animated.timing(this.keyboardHeight, {
      duration: event.duration,
      // TODO(DEV) find a way to avoid hard-coding 50 and see if this is universally compatible
      toValue: event.endCoordinates.height - 50,
    }).start();
  };

  keyboardWillHide = (event: DisplayKeyboardEvent) => {
    Animated.timing(this.keyboardHeight, {
      duration: event.duration,
      toValue: 0,
    }).start();
  };

  componentWillMount() {
    // TODO(DEV) Andriod uses keyboardDidShow and keyboardDidHide. Ensure universal compatibility
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    if (this.keyboardWillShowSub !== null)
      this.keyboardWillShowSub.remove();

    if (this.keyboardWillHideSub !== null)
      this.keyboardWillHideSub.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.keyboard, { marginBottom: this.keyboardHeight }]} >
          <FlatList data={
            convo.messages.map((msg, i) => ({ ...msg, key: i }))
          } renderItem={({ item }) => (
            <Message
              content={item.content}
              time={item.time}
              sender={user.id === item.owner}
            />
          )}
          />
          {/* TODO(DEV) get height value externally */}
          <InputBox style={{ width: '100%', height: 50 }} />
        </Animated.View>
      </View>
    );
  }
}

const InputBox = ({ style }: { style: ViewStyle }) => (
  <View style={[styles.inputContainer, style]}>
    <Icon
      name={'tag-faces'}
      size={20}
      containerStyle={styles.textIcon} />
    <View style={styles.textBoxContainer}>
      <TextInput
        returnKeyType={'send'}
        multiline
        style={styles.textBox}
        placeholder={'Write a message...'} />
    </View>
    <Icon
      name={'add'}
      size={20}
      containerStyle={styles.textIcon} />
  </View>
);

export default Conversation;
