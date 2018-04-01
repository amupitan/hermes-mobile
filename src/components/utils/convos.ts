interface Message {
  owner: number;
  content: string;
  time: Date;
}
interface Conversation {
  id: number;
  pm: boolean;
  members: [User, User];
  messages: Array<Message>;
}

interface User {
  id: number;
  name: string;
  convos: Array<number>;
  contacts: Array<User>;
}

export const user1: User = {
  id: 1,
  name: 'future',
  convos: [0],
  contacts: [],
};

export const user2: User = {
  id: 2,
  name: 'Drake',
  convos: [0],
  contacts: [user1],
};

const stub = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

export const convo: Conversation = {
  id: 0,
  pm: true,
  members: [user1, user2],
  messages: [
    { owner: 1, content: 'Hi', time: new Date() },
    { owner: 1, content: 'Answer me?', time: new Date() },
    { owner: 2, content: 'Hey!', time: new Date() },
    { owner: 1, content: 'How’s it going?', time: new Date() },
    { owner: 2, content: 'Good 👍🏿', time: new Date() },
    { owner: 2, content: stub, time: new Date() },
    { owner: 1, content: 'What’s that fam? 😕', time: new Date() },

  ]
};

export const convos: Array<Conversation> = [
  convo,
];
