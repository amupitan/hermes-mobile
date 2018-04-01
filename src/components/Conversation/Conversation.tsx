import * as React from 'react';
import { ScrollView } from 'react-native';

// TODO(DEV) use real data
import Message from '../Message';
import { user1, convos } from '../utils/convos';

import styles from './styles';

// TODO(DEV) get this info from a lib call
const user = user1;
const convoId: number = user1.convos[0];
const convo = convos[convoId];

const Conversation = () => (
  // TODO(DEV) use a real scroll
  <ScrollView contentContainerStyle={styles.container} >
    {convo.messages.map((msg, i) => (
      <Message
        key={`message-${i}`}
        style={styles.message}
        content={msg.content}
        time={msg.time}
        sender={user.id === msg.owner} />
    ))}
  </ScrollView>
);
export default Conversation;
