import React from 'react';
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
    <Checkbox
      checked={checked}
      onClick={onClickCallback}
      value="steroids"
      name="steroids"
      color="primary"
    />
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
    <Checkbox
      checked={checked}
      onClick={onClickCallback}
      value="methothrexate"
      name="methothrexate"
      color="primary"
    />
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
    <Checkbox
      checked={checked}
      onClick={onClickCallback}
      value="azathioprine"
      name="azathioprine"
      color="primary"
    />
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
    <Checkbox
      checked={checked}
      onClick={onClickCallback}
      value="ciclosporin"
      name="ciclosporin"
      color="primary"
    />
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
    <Checkbox
      checked={checked}
      onClick={onClickCallback}
      value="mycophenylate"
      name="mycophenylate"
      color="primary"
    />
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
    <Checkbox
      checked={checked}
      onClick={onClickCallback}
      value="hydroxychloroquine"
      name="hydroxychloroquine"
      color="primary"
    />
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
    <Checkbox
      checked={checked}
      onClick={onClickCallback}
      value="sulfasalazine"
      name="sulfasalazine"
      color="primary"
    />
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
    <Checkbox
      checked={checked}
      onClick={onClickCallback}
      value="cyclophosphamide"
      name="cyclophosphamide"
      color="primary"
    />
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
    <TextField
      value={value}
      onChange={onChangeCallback}
      label="Other"
      name="other"
    />
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

const Question2Data = (props) => {
  const {
    dmardsState,
    dmardsCallback
  } = props;
  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          control={(
            <SteroidsControl
              checked={dmardsState.steroids}
              onClickCallback={dmardsCallback}
            />
          )}
          label="Steroids"
        />
        <FormControlLabel
          control={(
            <MethothrexateControl
              checked={dmardsState.methothrexate}
              onClickCallback={dmardsCallback}
            />
          )}
          label="Methotrexate"
        />
        <FormControlLabel
          control={(
            <AzathioprineControl
              checked={dmardsState.azathioprine}
              onClickCallback={dmardsCallback}
            />
          )}
          label="Azathioprine"
        />
        <FormControlLabel
          control={(
            <CiclosporinControl
              checked={dmardsState.ciclosporin}
              onClickCallback={dmardsCallback}
            />
          )}
          label="Ciclosporin"
        />
        <FormControlLabel
          control={(
            <MycophenylateControl
              checked={dmardsState.mycophenylate}
              onClickCallback={dmardsCallback}
            />
          )}
          label="Mycophenylate"
        />
        <FormControlLabel
          control={(
            <HydroxychloroquineControl
              checked={dmardsState.hydroxychloroquine}
              onClickCallback={dmardsCallback}
            />
          )}
          label="Hydroxychloroquine"
        />
        <FormControlLabel
          control={(
            <SulfasalazineControl
              checked={dmardsState.sulfasalazine}
              onClickCallback={dmardsCallback}
            />
          )}
          label="Sulfasalazine"
        />
        <FormControlLabel
          control={(
            <CyclophosphamideControl
              checked={dmardsState.cyclophosphamide}
              onClickCallback={dmardsCallback}
            />
          )}
          label="Cyclophosphamide"
        />
        <OtherControl
          value={dmardsState.other}
          onChangeCallback={dmardsCallback}
        />
      </FormGroup>
    </FormControl>
  );
};

Question2Data.propTypes = {
  dmardsState: PropTypes.object.isRequired,
  dmardsCallback: PropTypes.func.isRequired
};

export { Question2Prompt, Question2Data };
