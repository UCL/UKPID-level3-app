import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import { Question1Data, Question1Prompt } from './question1';
import { Question2Data, Question2Prompt } from './question2';
import { Question3Data, Question3Prompt } from './question3';

const EntryForm = () => (
  <Paper>
    <Grid container>
      <Grid item xs={12}>
        <Question1Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question1Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question2Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question2Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question3Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question3Data />
      </Grid>
    </Grid>
  </Paper>
);

export default EntryForm;
