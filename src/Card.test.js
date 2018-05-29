import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';
import toJson from 'enzyme-to-json';

/** Snapshot test */
test('Card renders correctly', () => {
const component = shallow(<Card />);
expect(toJson(component)).toMatchSnapshot();
})
