import React from 'react';
import { shallow } from 'enzyme';

import ApplicationBar from './applicationbar';

describe('ApplicationBar component', () => {
  const appbar = shallow(<ApplicationBar />);
  it('It contains a Material UI AppBar', () => {
    expect(
      appbar
        .dive()
        .find('ForwardRef(AppBar)')
        .exists()
    ).toEqual(true);
  });
  it('It contains a Material UI Toolbar as first child', () => {
    expect(
      appbar
        .childAt(0)
        .dive()
        .find('ForwardRef(Toolbar)')
        .exists()
    ).toEqual(true);
  });
});
