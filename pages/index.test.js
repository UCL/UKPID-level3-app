import React from 'react';
import { shallow } from 'enzyme';

import Index from './index';

describe('find Index component', () => {
  it('shallow mount Index, it contains a SideBar', () => {
    expect.assertions(1);
    const index = shallow(<Index />);
    expect(index.find('SideBar').exists()).toStrictEqual(true);
  });
});
