import * as React from 'react';
import Message from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Message />).toJSON();
  expect(rendered).toBeTruthy();
});

