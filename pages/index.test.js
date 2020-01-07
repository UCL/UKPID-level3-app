import React from 'react';
import { shallow } from 'enzyme';

import Index from './index';

describe('Index component', () => {
  it('Shallow mount Index, it contains a SideBar', () => {
    const index = shallow(<Index />);
    expect(index.find('SideBar').exists()).toEqual(true);
  });
});
