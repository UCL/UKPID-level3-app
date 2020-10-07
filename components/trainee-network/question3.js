import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import q3MenuData from './question3-menu-data';

const question3Text = 'Which biological agent has been used?';

const Question3Prompt = () => <Typography>{question3Text}</Typography>;

const Question3Data = (props) => {
  const {
    classofmed,
    biologic,
    biologicCallback
  } = props;
  return (
    <FormGroup>
      <FormControl>
        <Select
          value={classofmed}
          onChange={biologicCallback}
          name="classofmed"
        >
          {q3MenuData.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Class of medication</FormHelperText>
      </FormControl>
      <FormControl>
        <Select
          value={biologic}
          onChange={biologicCallback}
          name="biologic"
        >
          {q3MenuData
            .filter((item) => item.value === classofmed)
            .flatMap((element) => element.biologics)
            .map((bio) => (
              <MenuItem key={bio.id} value={bio.value}>
                {bio.label}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText>Name of biologic agent</FormHelperText>
      </FormControl>
    </FormGroup>
  );
};

Question3Data.propTypes = {
  classofmed: PropTypes.string.isRequired,
  biologic: PropTypes.string.isRequired,
  biologicCallback: PropTypes.func.isRequired
};

export { Question3Data, Question3Prompt };
