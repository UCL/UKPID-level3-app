import React from 'react';
import { shallow } from 'enzyme';

import EntryForm from './entry-form';

describe('EntryForm component', () => {
  const entryForm = shallow(<EntryForm />);
  it('It contains a Material UI Paper container', () => {
    expect(
      entryForm
        .dive()
        .find('ForwardRef(Paper)')
        .exists()
    ).toEqual(true);
  });
});
