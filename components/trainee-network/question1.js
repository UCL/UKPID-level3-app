import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const Question1Data = (props) => {
  const {patientData} = props;
  return (
    <List component={Paper} dense>
      <ListItem>
        <ListItemText primary={`Patient ID: ${patientData.id}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Year of birth: ${patientData.yob}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Gender: ${patientData.gender}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`PID diagnosis: ${patientData.pid}`} />
      </ListItem>
    </List>
  )
};

Question1Data.propTypes = {
  patientData: PropTypes.object.isRequired
};

export default Question1Data;
