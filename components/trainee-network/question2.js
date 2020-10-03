import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const question2Text =
  'Did the patient receive disease modifying treatment ' +
  '(DMARDS) or other non-biologic immunosuppression before this biological ' +
  'therapy?';

const SteroidsControl = () => <Checkbox value="steroids" />;

const MethothrexateControl = () => <Checkbox value="methothrexate" />;

const AzathioprineControl = () => <Checkbox value="azathioprine" />;

const CiclosporinControl = () => <Checkbox value="ciclosporin" />;

const MycophenylateControl = () => <Checkbox value="mycophenylate" />;

const HydroxychloroquineControl = () => <Checkbox value="hydroxychloroquine" />;

const SulfasalazineControl = () => <Checkbox value="sulfasalazine" />;

const CyclophosphamideControl = () => <Checkbox value="cyclophosphamide" />;

const OtherControl = (props) => {
  const {value, onChangeCallback} = props;
  return (
    <TextField value={value} onChange={onChangeCallback} label="Other" />
  )
};
OtherControl.propTypes = {
  value: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired
}
OtherControl.defaultProps = {
  value: ''
}

const Question2Prompt = () => <Typography>{question2Text}</Typography>;

const Question2Data = () => {
  const [dmardsData, setDmardsData] = useState({
    steroids: false,
    methothrexate: false,
    azathioprine: false,
    ciclosporin: false,
    mycophenylate: false,
    hydroxychloroquine: false,
    sulfasalazine: false,
    cyclophosphamide: false,
    other: ''
  });
  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          control={(
            <SteroidsControl
              checked={dmardsData.steroids}
              onClick={(e) => setDmardsData({steroids: e.target.checked})}
            />
          )}
          label="Steroids"
        />
        <FormControlLabel
          control={(
            <MethothrexateControl
              checked={dmardsData.methothrexate}
              onClick={(e) => setDmardsData({methothrexate: e.target.checked})}
            />
          )}
          label="Methotrexate"
        />
        <FormControlLabel
          control={(
            <AzathioprineControl
              checked={dmardsData.azathioprine}
              onClick={(e) => setDmardsData({azathioprine: e.target.checked})}
            />
          )}
          label="Azathioprine"
        />
        <FormControlLabel
          control={(
            <CiclosporinControl
              checked={dmardsData.ciclosporin}
              onClick={(e) => setDmardsData({ciclosporin: e.target.checked})}
            />
          )}
          label="Ciclosporin"
        />
        <FormControlLabel
          control={(
            <MycophenylateControl
              checked={dmardsData.mycophenylate}
              onClick={(e) => setDmardsData({mycophenylate: e.target.checked})}
            />
          )}
          label="Mycophenylate"
        />
        <FormControlLabel
          control={(
            <HydroxychloroquineControl
              checked={dmardsData.hydroxychloroquine}
              onClick={(e) => setDmardsData(
                {hydroxychloroquine: e.target.checked}
              )}
            />
          )}
          label="Hydroxychloroquine"
        />
        <FormControlLabel
          control={(
            <SulfasalazineControl
              checked={dmardsData.sulfasalazine}
              onClick={(e) => setDmardsData({sulfasalazine: e.target.checked})}
            />
          )}
          label="Sulfasalazine"
        />
        <FormControlLabel
          control={(
            <CyclophosphamideControl
              checked={dmardsData.cyclophosphamide}
              onClick={(e) => setDmardsData(
                {cyclophosphamide: e.target.checked}
              )}
            />
          )}
          label="Cyclophosphamide"
        />
        <OtherControl
          value={dmardsData.other}
          onChangeCallback={(e) => setDmardsData(
            {other: e.target.value}
          )}
        />
      </FormGroup>
    </FormControl>
  );
};

export { Question2Prompt, Question2Data };
