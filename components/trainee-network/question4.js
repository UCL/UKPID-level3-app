import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import q4MenuData from './question4-menu-data';

const question4Text = 'What was the primary indication for the use of the '
  + 'biologic therapy?';

const Question4Prompt = () => <Typography>{question4Text}</Typography>;

const Question4Data = () => (
  <FormControl>
    <Select value="asthma">
      {
        q4MenuData.map((item) => (
          <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
        ))
      }
    </Select>
  </FormControl>
);

export { Question4Prompt, Question4Data };
