import React from 'react';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { getRequest, postRequest } from './request-controller';

import FormButtons from './form-buttons';
import { Question1Data, Question1Prompt } from './question1';
import { Question2Data, Question2Prompt } from './question2';

const DmardsSubForm = () => {
  const formAction = (data) => (event) => {
    event.preventDefault();
    postRequest('post/endpoint', data);
  };
  return (
    <React.Fragment>
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
        <form
          onSubmit={(event) => formAction('dummy-data')}
        >
          <Typography variant="h6">
            Disease modifying treatment (DMARDS) or other non-biologic
            immunosuppression
          </Typography>
          <Grid item xs={12}>
            <Question2Prompt />
          </Grid>
          <Grid item xs={12}>
            <Question2Data />
          </Grid>
          <FormButtons />
        </form>
      </Grid>
    </React.Fragment>
  );
};

export default DmardsSubForm;
