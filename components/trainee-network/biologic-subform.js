import React, {useReducer, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { getRequest, postRequest } from './request-controller';

import FormButtons from './form-buttons';
import { Question3Data, Question3Prompt } from './question3';
import { Question4Data, Question4Prompt } from './question4';
import { Question5Data, Question5Prompt } from './question5';
import { Question6Data, Question6Prompt } from './question6';
import { Question7Data, Question7Prompt } from './question7';
import { Question8Data, Question8Prompt } from './question8';
import { Question9Data, Question9Prompt } from './question9';
import { Question10Data, Question10Prompt } from './question10';

const biologicInitialState = {
  classofmed: '',
  biologic: '',
  indication: '',
  howLongBiologic: '',
  treatmentOutcome: '',
  howWasOutcomeMeasured: '',
  biologicComplications: '',
  biologicComplicationsDetails: '',
  biologicPrescribedImmunology: '',
  specialty: '',
  otherSpecialty: '',
  biologicTreatmentFunding: '',
  biologicTreatmentOtherFunding: ''
};

const biologicReducer = (state, action) => {
  // obtain name and value from event.target
  const { name, value, type } = action;
  if (type === 'reset') {
    return biologicInitialState;
  }
  // merge old and new state
  return { ... state, [name] : value};
};

const BiologicSubForm = (props) => {
  const {patientId} = props;
  const [state, dispatch] = useReducer(biologicReducer, biologicInitialState);

  useEffect(() => {
    getRequest(`rest/g/biologic/${patientId}`)
      .then(res => {
        if (res.error || !res.json) {
          dispatch({type: 'reset'});
        } else {
          Object.entries(res.json).forEach(([key,value]) => {
            dispatch({name: key, value});
          });
        }
      });
  },[]);

  const biologicCallback = useCallback(
    ({ target: { value, name, type, checked } }) => {
      const val = (type === 'checkbox') ? checked : value;
      dispatch({name: [name], value: val});
    }
  );

  const resetCallback = () => {
    dispatch({type: 'reset'});
  };

  const formAction = (e) => {
    e.preventDefault();
    postRequest('rest/p/biologic', state);
  };

  return (
    <form onSubmit={formAction}>
      <Typography variant="h6">Biological agents</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Question3Prompt />
        </Grid>
        <Grid item xs={12}>
          <Question3Data />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12}>
          <Question4Prompt />
        </Grid>
        <Grid item xs={12}>
          <Question4Data />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12}>
          <Question5Prompt />
        </Grid>
        <Grid item xs={12}>
          <Question5Data
            howLongBiologic={state.howLongBiologic}
            biologicCallback={biologicCallback}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12}>
          <Question6Prompt />
        </Grid>
        <Grid item xs={12}>
          <Question6Data
            treatmentOutcome={state.treatmentOutcome}
            howWasOutcomeMeasured={state.howWasOutcomeMeasured}
            biologicCallback={biologicCallback}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12}>
          <Question7Prompt />
        </Grid>
        <Grid item xs={12}>
          <Question7Data
            biologicComplications={state.biologicComplications}
            biologicComplicationsDetails={state.biologicComplicationsDetails}
            biologicCallback={biologicCallback}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12}>
          <Question8Prompt />
        </Grid>
        <Grid item xs={12}>
          <Question8Data
            biologicPrescribedImmunology={state.biologicPrescribedImmunology}
            biologicCallback={biologicCallback}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12}>
          <Question9Prompt />
        </Grid>
        <Grid item xs={12}>
          <Question9Data
            specialty={state.specialty}
            otherSpecialty={state.otherSpecialty}
            biologicCallback={biologicCallback}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12}>
          <Question10Prompt />
        </Grid>
        <Grid item xs={12}>
          <Question10Data
            biologicTreatmentFunding={state.biologicTreatmentFunding}
            biologicTreatmentOtherFunding={state.biologicTreatmentOtherFunding}
            biologicCallback={biologicCallback}
          />
        </Grid>
      </Grid>
      <FormButtons resetCallback={resetCallback} />
    </form>
  )
};

BiologicSubForm.propTypes = {
  patientId: PropTypes.number.isRequired
}

export default BiologicSubForm;
