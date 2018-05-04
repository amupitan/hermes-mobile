import * as React from 'react';
import SearchBar from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<SearchBar />).toJSON();
  expect(rendered).toBeTruthy();
});

