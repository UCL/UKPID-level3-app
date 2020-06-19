import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question10Text = '10. How was this biologic treatment funded?';

const Question10Prompt = () => <Typography>{question10Text}</Typography>;

const Question10Data = () => (
  <FormControl>
    <FormGroup>
      <RadioGroup
        aria-label="q10-how-treatment-was-funded"
        name="q10-how-treatment-was-funded"
        value="no"
      >
        <FormControlLabel
          value="nice"
          control={<Radio />}
          label="NICE approved"
        />
        <FormControlLabel value="ipr" control={<Radio />} label="IPR" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormGroup>
    <FormGroup>
      <TextField id="q9-other" label="If other, please state" />
    </FormGroup>
  </FormControl>
);

export { Question10Data, Question10Prompt };
