import React from 'react';
import { shallow } from 'enzyme';

import SideBar from './sidebar';

describe('find SideBar component', () => {
  it('shallow mount SideBar, it contains a Material UI Drawer', () => {
    expect.assertions(1);
    const sidebar = shallow(<SideBar />);
    expect(sidebar.dive().find('ForwardRef(Drawer)').exists()).toStrictEqual(
      true
    );
  });
});
