import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Question1Data from './question1';

const PatientDetails = (props) => {
  const {patientData} = props;
  return (
    <Grid container>
      <Typography variant="h6" component="div">
        Patient information
      </Typography>
      <Grid item xs={12}>
        <Question1Data patientData={patientData} />
      </Grid>
    </Grid>
  );
};

PatientDetails.propTypes = {
  patientData: PropTypes.object.isRequired
};

export default PatientDetails;
