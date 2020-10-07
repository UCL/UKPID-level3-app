import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question7Text =
  'Were there any complications or adverse effects of ' +
  'the biologic treatment?';

const Question7Prompt = () => <Typography>{question7Text}</Typography>;

const Question7Data = (props) => {
  const {
    biologicComplications,
    biologicComplicationsDetails,
    biologicCallback
  } = props;
  return (
    <FormControl>
      <FormGroup>
        <RadioGroup
          aria-label="q7-complications"
          name="biologicComplications"
          value={biologicComplications}
          onChange={biologicCallback}
        >
          <FormControlLabel
            value="yes"
            control={<Radio color="primary" />}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio color="primary" />}
            label="No"
          />
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <TextField
          value={biologicComplicationsDetails}
          onChange={biologicCallback}
          name="biologicComplicationsDetails"
          label="Details"
        />
      </FormGroup>
    </FormControl>
  )
};

Question7Data.propTypes = {
  biologicComplications: PropTypes.string.isRequired,
  biologicComplicationsDetails: PropTypes.string.isRequired,
  biologicCallback: PropTypes.func.isRequired
};

export { Question7Data, Question7Prompt };
