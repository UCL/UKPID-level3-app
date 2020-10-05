import React, {useReducer, useCallback} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { postRequest } from './request-controller';

import FormButtons from './form-buttons';
import { Question2Data, Question2Prompt } from './question2';

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
  const dmardsCallback = useCallback(
    ({ target: { value, name, type, checked } }) => {
      const val = (type === 'checkbox') ? checked : value;
      dispatch({name: [name], value: val});
    }
  );
  const resetCallback = () => {
    dispatch({type: 'reset'});
  };
  const formAction = () => {
    postRequest('rest/p/dmards', state);
  };
  return (
    <React.Fragment>
      <Grid container>
        <form onSubmit={(e) => e.preventDefault()}>
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
            submitCallback={formAction}
          />
        </form>
      </Grid>
    </React.Fragment>
  );
};

export default DmardsSubForm;
