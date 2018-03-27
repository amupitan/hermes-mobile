import * as React from 'react';
import { ScrollView } from 'react-native';
import Convo from '../Convo';

// TODO(DEV) use real data
import { user1, convos } from '../utils/convos';

import styles from './styles';

// TODO(DEV) get this info from a lib call
const convoId: number = user1.convos[0];
const convo = convos[convoId];
const lastMessage = convo.messages[convo.messages.length - 1];

const Messages = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Convo style={styles.convo} notification={1} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
    <Convo style={styles.convo} notification={1} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
    <Convo style={styles.convo} notification={0} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
    <Convo style={styles.convo} notification={1} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
    <Convo style={styles.convo} notification={1} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
    <Convo style={styles.convo} notification={1} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
    <Convo style={styles.convo} notification={1} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
    <Convo style={styles.convo} notification={1} name={convo.members[1].name} message={lastMessage.content} time={lastMessage.time} />
  </ScrollView>
);

export default Messages;
