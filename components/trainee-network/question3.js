import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const question3Text = '3. Which biological agent has been used?';
const anticd20Text = 'Anti-CD20 depleting monoclonal antibody';

const Question3Prompt = () => <Typography>{question3Text}</Typography>;

const Question3Data = () => (
  <FormControl>
    <Select value="biological-agent-category">
      <MenuItem value="anti-cd20">{anticd20Text}</MenuItem>
    </Select>
  </FormControl>
);

export { Question3Data, Question3Prompt };
