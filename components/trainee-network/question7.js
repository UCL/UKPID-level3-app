import React, {useState} from 'react';

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

const Question7Data = () => {
  const [biologicComplications, setBiologicComplications] = useState(null);
  const [
    biologicComplicationsDetails,
    setBiologicComplicationsDetails
  ] = useState('');
  return (
    <FormControl>
      <FormGroup>
        <RadioGroup
          aria-label="q7-complications"
          name="q7-complications"
          value={biologicComplications}
          onChange={(e) => setBiologicComplications(e.target.value)}
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
          onChange={(e) => setBiologicComplicationsDetails(e.target.value)}
          id="q7-details"
          label="Details"
        />
      </FormGroup>
    </FormControl>
  )
};

export { Question7Data, Question7Prompt };
