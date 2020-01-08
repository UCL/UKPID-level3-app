import React from 'react';
import { shallow } from 'enzyme';

import SideBar from './sidebar';

describe('SideBar component', () => {
  it('Shallow mount SideBar, it contains a Material UI Drawer', () => {
    const sidebar = shallow(<SideBar />);
    expect(
      sidebar
        .dive()
        .find('ForwardRef(Drawer)')
        .exists()
    ).toEqual(true);
  });
});
