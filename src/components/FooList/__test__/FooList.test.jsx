import React from 'react';
import { shallow, mount, render } from 'enzyme';

import FooList from '../';

describe('FooList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FooList />);
    expect(wrapper.find('div.container')).toHaveLength(1);
  });
});
