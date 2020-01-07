import React from 'react';
import { shallow } from 'enzyme';

import Index from './index';

describe('Index component', () => {
  it('Shallow mount Index', () => {
    const index = shallow(<Index />);
    expect(index.find('div').text()).toEqual('TEMPLATE');
  });
});
