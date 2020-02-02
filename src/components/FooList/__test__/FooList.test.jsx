import React from 'react';
import { shallow } from 'enzyme';

import FooList from '../';

describe('FooList', () => {
  const renderFooList = props => shallow(<FooList {...props} />);

  it('renders correctly', () => {
    const wrapper = renderFooList({});
    expect(wrapper.find('div.container')).toHaveLength(1);
  });

  it('renders two foos', () => {
    const dumpFoos = [
      {
        id: 1,
        colour: '1',
        speed: '1',
        size: '1',
      },
      {
        id: 2,
        colour: '2',
        speed: '2',
        size: '2',
      },
    ];
    const wrapper = renderFooList({ fooList: dumpFoos });

    expect(wrapper.find('li.list-group-item')).toHaveLength(2);
  });
});
