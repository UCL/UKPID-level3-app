import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { postRequest } from './request-controller';

import FormButtons from './form-buttons';
import { Question2Data, Question2Prompt } from './question2';

const DmardsSubForm = () => {
  const formAction = (data) => (event) => {
    event.preventDefault();
    postRequest('post/endpoint', data);
  };
  return (
    <React.Fragment>
      <Grid container>
        <form onSubmit={(event) => formAction('dummy-data', event)}>
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
