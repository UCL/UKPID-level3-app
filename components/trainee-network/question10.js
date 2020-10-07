import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question10Text = 'How was this biologic treatment funded?';

const Question10Prompt = () => <Typography>{question10Text}</Typography>;

const Question10Data = (props) => {
  const {
    biologicTreatmentFunding,
    biologicTreatmentOtherFunding,
    biologicCallback
  } = props;

  return (
    <FormControl>
      <FormGroup>
        <RadioGroup
          aria-label="q10-how-treatment-was-funded"
          name="biologicTreatmentFunding"
          value={biologicTreatmentFunding}
          onChange={biologicCallback}
        >
          <FormControlLabel
            value="nice"
            control={<Radio color="primary" />}
            label="NICE approved"
          />
          <FormControlLabel
            value="ipr"
            control={<Radio color="primary" />}
            label="IPR"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
          />
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <TextField
          value={biologicTreatmentOtherFunding}
          onChange={biologicCallback}
          id="q9-other"
          name="biologicTreatmentOtherFunding"
          label="If other, please state"
        />
      </FormGroup>
    </FormControl>
  )
};

Question10Data.propTypes = {
  biologicTreatmentFunding: PropTypes.string.isRequired,
  biologicTreatmentOtherFunding: PropTypes.string.isRequired,
  biologicCallback: PropTypes.func.isRequired
}

export { Question10Data, Question10Prompt };
