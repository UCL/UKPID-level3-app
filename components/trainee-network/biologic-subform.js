import React from 'react';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import FormButtons from './form-buttons';
import { Question3Data, Question3Prompt } from './question3';
import { Question4Data, Question4Prompt } from './question4';
import { Question5Data, Question5Prompt } from './question5';
import { Question6Data, Question6Prompt } from './question6';
import { Question7Data, Question7Prompt } from './question7';
import { Question8Data, Question8Prompt } from './question8';
import { Question9Data, Question9Prompt } from './question9';
import { Question10Data, Question10Prompt } from './question10';

const BiologicSubForm = () => (
  <form>
    <Typography variant="h6">
      Biological agents
    </Typography>
    <Grid container>
      <Grid item xs={12}>
        <Question3Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question3Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question4Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question4Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question5Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question5Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question6Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question6Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question7Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question7Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question8Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question8Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question9Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question9Data />
      </Grid>
    </Grid>
    <Divider />
    <Grid container>
      <Grid item xs={12}>
        <Question10Prompt />
      </Grid>
      <Grid item xs={12}>
        <Question10Data />
      </Grid>
    </Grid>
    <FormButtons />
  </form>
);

export default BiologicSubForm;
