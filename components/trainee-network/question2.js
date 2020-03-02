import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question2Text = '2. Did the patient receive disease modifying treatment '
  + '(DMARDS) or other non-biologic immunosuppression before this biological '
  + 'therapy?';

const SteroidsControl = () => <Checkbox checked={false} value="steroids" />;

const MethothrexateControl = () => (
  <Checkbox checked={false} value="methothrexate" />
);

const AzathioprineControl = () => (
  <Checkbox checked={false} value="azathioprine" />
);

const CiclosporinControl = () => (
  <Checkbox checked={false} value="ciclosporin" />
);

const MycophenylateControl = () => (
  <Checkbox checked={false} value="mycophenylate" />
);

const HydroxychloroquineControl = () => (
  <Checkbox checked={false} value="hydroxychloroquine" />
);

const SulfasalazineControl = () => (
  <Checkbox checked={false} value="sulfasalazine" />
);

const CyclophosphamideControl = () => (
  <Checkbox checked={false} value="cyclophosphamide" />
);

const OtherControl = () => <TextField label="Other" />;

const Question2Prompt = () => <Typography>{question2Text}</Typography>;

const Question2Data = () => (
  <FormControl>
    <FormGroup>
      <FormControlLabel control={<SteroidsControl />} label="Steroids" />
      <FormControlLabel
        control={<MethothrexateControl />}
        label="Methotrexate"
      />
      <FormControlLabel
        control={<AzathioprineControl />}
        label="Azathioprine"
      />
      <FormControlLabel control={<CiclosporinControl />} label="Ciclosporin" />
      <FormControlLabel
        control={<MycophenylateControl />}
        label="Mycophenylate"
      />
      <FormControlLabel
        control={<HydroxychloroquineControl />}
        label="Hydroxychloroquine"
      />
      <FormControlLabel
        control={<SulfasalazineControl />}
        label="Sulfasalazine"
      />
      <FormControlLabel
        control={<CyclophosphamideControl />}
        label="Cyclophosphamide"
      />
      <OtherControl />
    </FormGroup>
  </FormControl>
);

export { Question2Prompt, Question2Data };
