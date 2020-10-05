import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question5Text =
  'How long did the patient receive this biologic treatment for?';

const Question5Prompt = () => <Typography>{question5Text}</Typography>;

const Question5Data = () => {
  const [howLongBiologic, setHowLongBiologic] = useState(null);
  return (
    <FormControl>
      <FormGroup>
        <TextField
          value={howLongBiologic}
          onChange={(e) => setHowLongBiologic(e.target.value)}
          label="Length of treatment"
        />
      </FormGroup>
    </FormControl>
  )
};

export { Question5Data, Question5Prompt };
