import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';
import renderer from 'react-test-renderer';

/** Snapshot test */
test('Card renders correctly', () => {
  const component = renderer
    .create(<Card />)
    .toJSON();
  expect(component).toMatchSnapshot()
});
