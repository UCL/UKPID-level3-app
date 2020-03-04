import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { q3_menu_data } from './question3-menu-data.js';

const question3Text = 'Which biological agent has been used?';

const Question3Prompt = () => <Typography>{question3Text}</Typography>;

const Question3Data = () => {
  const [ classofmed, setClassofmed ] = useState('');
  const [ biologic, setBiologic ] = useState('');
  return (
    <FormGroup>
      <FormControl>
        <Select
          value={classofmed}
          onChange={event => {
            setClassofmed(event.target.value);
            setBiologic('');
          }}
          >
          {
            q3_menu_data.map(item => (
              <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
            ))
          }
        </Select>
        <FormHelperText>Class of medication</FormHelperText>
      </FormControl>
      <FormControl>
        <Select
          value={biologic}
          onChange={event => setBiologic(event.target.value)}
        >
          {
            q3_menu_data.filter(
              item => item.value === classofmed
            ).flatMap(
              element => element.biologics
            ).map(bio => (
              <MenuItem key={bio.id} value={bio.value}>{bio.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </FormGroup>
  );
};

export { Question3Data, Question3Prompt };
