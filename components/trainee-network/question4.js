import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

const question4Text = '4. What was the primary indiciation for the use of the biologic therapy?';

const Question4Prompt = () => <Typography>{question4Text}</Typography>;

const Question4Data = () => (
  <FormControl>
    <FormGroup />
  </FormControl>
);

export { Question4Prompt, Question4Data };
