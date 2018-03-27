import * as React from 'react';
import Convo from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Convo />).toJSON();
  expect(rendered).toBeTruthy();
});

