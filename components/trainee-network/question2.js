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

const SteroidsControl = (props) => {
  const {checked, onClickCallback} = props;
  return (
    <Checkbox checked={checked} onClick={onClickCallback} value="steroids" />
  )
};
SteroidsControl.propTypes = {
  checked: PropTypes.bool,
  onClickCallback: PropTypes.func.isRequired
};
SteroidsControl.defaultProps = {
  checked: false
};

const MethothrexateControl = (props) => {
  const {checked, onClickCallback} = props;
  return (
    <Checkbox checked={checked} onClick={onClickCallback} value="methothrexate" />
  )
};
MethothrexateControl.propTypes = {
  checked: PropTypes.bool,
  onClickCallback: PropTypes.func.isRequired
};
MethothrexateControl.defaultProps = {
  checked: false
};

const AzathioprineControl = (props) => {
  const {checked, onClickCallback} = props;
  return (
    <Checkbox checked={checked} onClick={onClickCallback} value="azathioprine" />
  )
};
AzathioprineControl.propTypes = {
  checked: PropTypes.bool,
  onClickCallback: PropTypes.func.isRequired
};
AzathioprineControl.defaultProps = {
  checked: false
};

const CiclosporinControl = (props) => {
  const {checked, onClickCallback} = props;
  return (
    <Checkbox checked={checked} onClick={onClickCallback} value="ciclosporin" />
  )
};
CiclosporinControl.propTypes = {
  checked: PropTypes.bool,
  onClickCallback: PropTypes.func.isRequired
};
CiclosporinControl.defaultProps = {
  checked: false
};

const MycophenylateControl = (props) => {
  const {checked, onClickCallback} = props;
  return (
    <Checkbox checked={checked} onClick={onClickCallback} value="mycophenylate" />
  )
};
MycophenylateControl.propTypes = {
  checked: PropTypes.bool,
  onClickCallback: PropTypes.func.isRequired
};
MycophenylateControl.defaultProps = {
  checked: false
};

const HydroxychloroquineControl = (props) => {
  const {checked, onClickCallback} = props;
  return (
    <Checkbox checked={checked} onClick={onClickCallback} value="hydroxychloroquine" />
  )
};
HydroxychloroquineControl.propTypes = {
  checked: PropTypes.bool,
  onClickCallback: PropTypes.func.isRequired
};
HydroxychloroquineControl.defaultProps = {
  checked: false
};

const SulfasalazineControl = (props) => {
  const {checked, onClickCallback} = props;
  return (
    <Checkbox checked={checked} onClick={onClickCallback} value="sulfasalazine" />
  )
};
SulfasalazineControl.propTypes = {
  checked: PropTypes.bool,
  onClickCallback: PropTypes.func.isRequired
};
SulfasalazineControl.defaultProps = {
  checked: false
}

const CyclophosphamideControl = (props) => {
  const {checked, onClickCallback} = props;
  return (
    <Checkbox checked={checked} onClick={onClickCallback} value="cyclophosphamide" />
  )
};
CyclophosphamideControl.propTypes = {
  checked: PropTypes.bool,
  onClickCallback: PropTypes.func.isRequired
};
CyclophosphamideControl.defaultProps = {
  checked: false
}

const OtherControl = (props) => {
  const {value, onChangeCallback} = props;
  return (
    <TextField value={value} onChange={onChangeCallback} label="Other" />
  )
};
OtherControl.propTypes = {
  value: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired
};
OtherControl.defaultProps = {
  value: ''
};

const Question2Prompt = () => <Typography>{question2Text}</Typography>;

const Question2Data = () => {
  const [steroids, setSteroids] = useState(false);
  const [methothrexate, setMethothrexate] = useState(false);
  const [azathioprine, setAzathioprine] = useState(false);
  const [ciclosporin, setCiclosporin] = useState(false);
  const [mycophenylate, setMycophenylate] = useState(false);
  const [hydroxychloroquine, setHydroxychloroquine] = useState(false);
  const [sulfasalazine, setSulfazalazine] = useState(false);
  const [cyclophosphamide, setCyclophosphamide] = useState(false);
  const [other, setOther] = useState('');
  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          control={(
            <SteroidsControl
              checked={steroids}
              onClickCallback={(e) => setSteroids(e.target.checked)}
            />
          )}
          label="Steroids"
        />
        <FormControlLabel
          control={(
            <MethothrexateControl
              checked={methothrexate}
              onClickCallback={(e) => setMethothrexate(e.target.checked)}
            />
          )}
          label="Methotrexate"
        />
        <FormControlLabel
          control={(
            <AzathioprineControl
              checked={azathioprine}
              onClickCallback={(e) => setAzathioprine(e.target.checked)}
            />
          )}
          label="Azathioprine"
        />
        <FormControlLabel
          control={(
            <CiclosporinControl
              checked={ciclosporin}
              onClickCallback={(e) => setCiclosporin(e.target.checked)}
            />
          )}
          label="Ciclosporin"
        />
        <FormControlLabel
          control={(
            <MycophenylateControl
              checked={mycophenylate}
              onClickCallback={(e) => setMycophenylate(e.target.checked)}
            />
          )}
          label="Mycophenylate"
        />
        <FormControlLabel
          control={(
            <HydroxychloroquineControl
              checked={hydroxychloroquine}
              onClickCallback={(e) => setHydroxychloroquine(e.target.checked)}
            />
          )}
          label="Hydroxychloroquine"
        />
        <FormControlLabel
          control={(
            <SulfasalazineControl
              checked={sulfasalazine}
              onClickCallback={(e) => setSulfazalazine(e.target.checked)}
            />
          )}
          label="Sulfasalazine"
        />
        <FormControlLabel
          control={(
            <CyclophosphamideControl
              checked={cyclophosphamide}
              onClickCallback={(e) => setCyclophosphamide(e.target.checked)}
            />
          )}
          label="Cyclophosphamide"
        />
        <OtherControl
          value={other}
          onChangeCallback={(e) => setOther(e.target.value)}
        />
      </FormGroup>
    </FormControl>
  );
};

export { Question2Prompt, Question2Data };
