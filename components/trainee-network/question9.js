import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question9Text = '9. If prescribed by another specialty, which specialty?';

const Question9Prompt = () => <Typography>{question9Text}</Typography>;

const Question9Data = () => (
  <FormControl>
    <FormGroup>
      <Select value="specialty">
        <MenuItem value="haematology">Haematology</MenuItem>
        <MenuItem value="rheumatology">Rheumatology</MenuItem>
        <MenuItem value="renal">Renal</MenuItem>
        <MenuItem value="respiratory">Respiratory</MenuItem>
        <MenuItem value="oncology">Oncology</MenuItem>
        <MenuItem value="gastroenterology">Gastroenterology</MenuItem>
        <MenuItem value="neurology">Neurology</MenuItem>
      </Select>
    </FormGroup>
    <FormGroup>
      <TextField
        id="q9-other"
        label="If other, please state"
      />
    </FormGroup>
  </FormControl>
);

export { Question9Data, Question9Prompt };
