import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

const question8Text =
  'Was the biologic prescribed through the Immunology service?';

const Question8Prompt = () => <Typography>{question8Text}</Typography>;

const Question8Data = (props) => {
  const {biologicPrescribedImmunology, biologicCallback} = props;
  return (
    <FormControl>
      <FormGroup>
        <RadioGroup
          aria-label="q8-prescribed-through-immunology"
          name="biologicPrescribedImmunology"
          value={biologicPrescribedImmunology}
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
    </FormControl>
  )
};

Question8Data.propTypes = {
  biologicPrescribedImmunology: PropTypes.string.isRequired,
  biologicCallback: PropTypes.func.isRequired
}

export { Question8Data, Question8Prompt };
