import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

const question5Text = '5. How long did the patient receive this biologic '
  + 'treatment for?';

const Question5Prompt = () => <Typography>{question5Text}</Typography>;

const Question5Data = () => (
  <FormControl>
    <FormGroup />
  </FormControl>
);

export { Question5Data, Question5Prompt };
