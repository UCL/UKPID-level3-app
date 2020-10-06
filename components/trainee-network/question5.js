import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question5Text =
  'How long did the patient receive this biologic treatment for?';

const Question5Prompt = () => <Typography>{question5Text}</Typography>;

const Question5Data = (props) => {
  const {howLongBiologic, biologicCallback} = props;

  return (
    <FormControl>
      <FormGroup>
        <TextField
          value={howLongBiologic}
          onChange={biologicCallback}
          label="Length of treatment"
          name="howLongBiologic"
        />
      </FormGroup>
    </FormControl>
  )
};

Question5Data.propTypes = {
  howLongBiologic: PropTypes.string.isRequired,
  biologicCallback: PropTypes.func.isRequired
};

export { Question5Data, Question5Prompt };
