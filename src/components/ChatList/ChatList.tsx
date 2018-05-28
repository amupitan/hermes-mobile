import * as React from 'react';
import { ScrollView, FlatList } from 'react-native';
import Chat from '../Chat';

// TODO(DEV) use real data
import { user1, convos } from '../utils/convos';

import styles from './styles';

// TODO(DEV) get this info from a lib call
const convoId: number = user1.convos[0];
const convo = convos[convoId];
const lastMessage = convo.messages[convo.messages.length - 1];

const ChatList = () => (
  <FlatList data={
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((x) => ({ key: x }))
  } renderItem={({ item }) => (
    <Chat style={styles.convo} notification={1} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
  )} />

);

export default ChatList;
