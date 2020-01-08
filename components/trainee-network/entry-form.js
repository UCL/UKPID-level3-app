import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Question1Prompt } from './question1';

const EntryForm = () => (
  <Grid container>
    <Grid item xs>
      <Question1Prompt />
    </Grid>
  </Grid>
);

export default EntryForm;
