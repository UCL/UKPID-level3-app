import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question7Text = '7. Were there any complications or adverse effects of '
+ 'the biologic treatment?';

const Question7Prompt = () => <Typography>{question7Text}</Typography>;

const Question7Data = () => (
  <FormControl>
    <FormGroup>
      <RadioGroup
        aria-label="q7-complications"
        name="q7-complications"
        value="no"
      >
        <FormControlLabel
          value="yes"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No"
        />
      </RadioGroup>
    </FormGroup>
    <FormGroup>
      <TextField
        id="q7-details"
        label="Details"
      />
    </FormGroup>
  </FormControl>
);

export { Question7Data, Question7Prompt };
