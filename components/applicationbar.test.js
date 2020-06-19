import React from 'react';
import { shallow } from 'enzyme';

import ApplicationBar from './applicationbar';

describe('find ApplicationBar component', () => {
  const appbar = shallow(<ApplicationBar />);
  it('contains a Material UI AppBar', () => {
    expect.assertions(1);
    expect(appbar.dive().find('ForwardRef(AppBar)').exists()).toStrictEqual(
      true
    );
  });
  it('contains a Material UI Toolbar as first child', () => {
    expect.assertions(1);
    expect(
      appbar.childAt(0).dive().find('ForwardRef(Toolbar)').exists()
    ).toStrictEqual(true);
  });
});
