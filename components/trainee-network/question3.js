import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { q3_menu_data } from './question3-menu-data.js';

const question3Text = 'Which biological agent has been used?';

const Question3Prompt = () => <Typography>{question3Text}</Typography>;

const Question3Data = () => (
  <FormControl>
    <Select value="anti-tnfs">
    {
      q3_menu_data.map(item => (
        <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
      ))
    }
    </Select>
    <FormHelperText>Class of medication</FormHelperText>
  </FormControl>
);

export { Question3Data, Question3Prompt };
