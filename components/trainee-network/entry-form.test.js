import React from 'react';
import { shallow } from 'enzyme';

import EntryForm from './entry-form';

describe('find EntryForm component', () => {
  const entryForm = shallow(<EntryForm />);
  it('contains a Material UI Paper container', () => {
    expect.assertions(1);
    expect(
      entryForm
        .dive()
        .find('ForwardRef(Paper)')
        .exists(),
    ).toStrictEqual(true);
  });
});
