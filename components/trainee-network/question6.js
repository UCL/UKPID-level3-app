import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question6Text = '6. What was the outcome of the treatment?';

const Question6Prompt = () => <Typography>{question6Text}</Typography>;

const Question6Data = () => (
  <FormControl>
    <FormGroup>
      <RadioGroup aria-label="q6-outcome" name="q6-outcome" value="complete">
        <FormControlLabel
          value="complete"
          control={<Radio />}
          label="Complete"
        />
        <FormControlLabel value="partial" control={<Radio />} label="Partial" />
        <FormControlLabel
          value="no-response"
          control={<Radio />}
          label="No response"
        />
      </RadioGroup>
    </FormGroup>
    <FormGroup>
      <FormLabel componen="legend">How was this response measured?</FormLabel>
      <TextField
        id="q6-how-was-response-measured"
        helperText="how was this response judged (symptomatic, radiological, blood test measurement)"
      />
    </FormGroup>
  </FormControl>
);

export { Question6Data, Question6Prompt };
