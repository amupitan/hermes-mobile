import * as React from 'react';
import ChatList from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ChatList />).toJSON();
  expect(rendered).toBeTruthy();
});

