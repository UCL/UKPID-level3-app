import React, {useReducer, useCallback, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { getRequest, postRequest } from './request-controller';

import FormButtons from './form-buttons';
import { Question2Data, Question2Prompt } from './question2';

const getDmardsForPatientId = (patientId) => {
  const {data, error} = getRequest(`rest/g/dmards/${patientId}`);
  return {
    dmards: data,
    isLoading: !error && !data,
    isError: error
  }
};

const dmardsInitialState = {
  steroids: false,
  methothrexate: false,
  azathioprine: false,
  ciclosporin: false,
  mycophenylate: false,
  hydroxychloroquine: false,
  sulfasalazine: false,
  cyclophosphamide: false,
  other: ''
};

const dmardsReducer = (state, action) => {
  // obtain name and value from event.target
  const { name, value, type } = action;
  if (type === 'reset') {
    return dmardsInitialState;
  }
  // merge old and new state
  return { ... state, [name] : value};
};

const DmardsSubForm = () => {
  const [state, dispatch] = useReducer(dmardsReducer, dmardsInitialState);

  useEffect(() => {
    const res = getDmardsForPatientId(1);
    if (res.isError || res.isLoading) {
      dispatch({type: 'reset'});
    } else {
      Object.entries(res.dmards).forEach(([key,value]) => {
        dispatch({name: key, value});
      });
    }
  },[]);

  const dmardsCallback = useCallback(
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
    postRequest('rest/p/dmards', state);
  };
  return (
    <React.Fragment>
      <Grid container>
        <form onSubmit={formAction}>
          <Typography variant="h6">
            Disease modifying treatment (DMARDS) or other non-biologic
            immunosuppression
          </Typography>
          <Grid item xs={12}>
            <Question2Prompt />
          </Grid>
          <Grid item xs={12}>
            <Question2Data
              dmardsState={state}
              dmardsCallback={dmardsCallback}
            />
          </Grid>
          <FormButtons
            resetCallback={resetCallback}
          />
        </form>
      </Grid>
    </React.Fragment>
  );
};

export default DmardsSubForm;
