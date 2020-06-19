import React from 'react';

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import DmardsSubForm from './dmards-subform';
import BiologicSubForm from './biologic-subform';

const EntryForm = () => (
  <Paper>
    <DmardsSubForm />
    <Divider />
    <BiologicSubForm />
  </Paper>
);

export default EntryForm;
