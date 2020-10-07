import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question6Text = 'What was the outcome of the treatment?';

const Question6Prompt = () => <Typography>{question6Text}</Typography>;

const Question6Data = (props) => {
  const {treatmentOutcome, biologicCallback} = props;
  return (
    <FormControl>
      <FormGroup>
        <RadioGroup
          aria-label="q6-outcome"
          name="treatmentOutcome"
          value={treatmentOutcome}
          onChange={biologicCallback}
        >
          <FormControlLabel
            value="complete"
            control={<Radio color="primary" />}
            label="Complete"
          />
          <FormControlLabel
            value="partial"
            control={<Radio color="primary" />}
            label="Partial"
          />
          <FormControlLabel
            value="no-response"
            control={<Radio color="primary" />}
            label="No response"
          />
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <FormLabel component="legend">How was this response measured?</FormLabel>
        <TextField
          id="q6-how-was-response-measured"
          helperText="how was this response judged (symptomatic, radiological, blood test measurement)"
        />
      </FormGroup>
    </FormControl>
  )
};

Question6Data.propTypes = {
  treatmentOutcome: PropTypes.string.isRequired,
  biologicCallback: PropTypes.func.isRequired
}

export { Question6Data, Question6Prompt };
