import * as React from 'react';
import Chat from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Chat />).toJSON();
  expect(rendered).toBeTruthy();
});

