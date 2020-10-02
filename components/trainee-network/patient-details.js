import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Question1Data, Question1Prompt } from './question1';

const PatientDetails = () => {
  return (
    <Grid container>
      <Typography variant="h6" component="div">
        Patient information
      </Typography>
      <Grid item xs={12}>
        <Question1Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question1Data />
      </Grid>
    </Grid>
  );
};

export default PatientDetails;
