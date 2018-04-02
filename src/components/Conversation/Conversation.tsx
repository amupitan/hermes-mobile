import * as React from 'react';
import { KeyboardAvoidingView, ScrollView, TextInput, View, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';

// TODO(DEV) use real data
import Message from '../Message';
import { user1, convos } from '../utils/convos';

import styles from './styles';

// TODO(DEV) get this info from a lib call
const user = user1;
const convoId: number = user1.convos[0];
const convo = convos[convoId];

const Conversation = () => (
  <View style={styles.container}>
    <KeyboardAvoidingView behavior='padding' >
      {/* TODO(DEV) use a real scroll */}
      <ScrollView contentContainerStyle={styles.conversationContainer} >
        {convo.messages.map((msg, i) => (
          <Message
            key={`message-${i}`}
            style={styles.message}
            content={msg.content}
            time={msg.time}
            sender={user.id === msg.owner} />
        ))}
      </ScrollView>
      <InputBox style={styles.inputContainer} />
      {/* TODO(UX): use a better way to make the page move with the keyboard.  */}
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  </View>

);

const InputBox = ({ style }: { style: ViewStyle }) => (
  <View style={[styles.inputContainer, style]}>
    <Icon
      name={'tag-faces'}
      size={20}
      containerStyle={styles.textIcon} />
    <TextInput
      returnKeyType={'send'}
      multiline
      style={styles.textBox}
      placeholder={'Write a message...'} />
    <Icon
      name={'add'}
      size={20}
      containerStyle={styles.textIcon} />
  </View>
);

export default Conversation;
