import { HermesRoutes } from './constants';

import Contacts from '../components/Contacts';
import Conversation from '../components/Conversation';
import ChatList from '../components/ChatList';
import Settings from '../components/Settings';

interface HermesRoute {
  name: string;
  path: string;
  component: (props: any) => any;
  screen: boolean;
  exact: boolean;
}

const homeRoutes: Array<HermesRoute> = [
  {
    name: 'Messages',
    path: HermesRoutes.MESSAGES,
    component: ChatList,
    screen: false,
    exact: true,
  },
  {
    name: 'Contacts',
    path: HermesRoutes.CONTACTS,
    component: Contacts,
    screen: false,
    exact: true,
  },
  {
    name: 'Settings',
    path: HermesRoutes.SETTINGS,
    component: Settings,
    screen: false,
    exact: true,
  },
  {
    // TODO(DEV) change name
    name: 'Conversation',
    path: HermesRoutes.CONVERSATION,
    component: Conversation,
    screen: false,
    exact: true,
  },
];

export const DEFAULT_ROUTE_PATH = homeRoutes[0].path;

export default homeRoutes;