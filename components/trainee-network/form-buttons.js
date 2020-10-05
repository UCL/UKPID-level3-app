import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';

const FormButtons = (props) => {
  const {resetCallback, submitCallback} = props;
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        size="small"
        type="submit"
        onClick={submitCallback}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        type="reset"
        onClick={resetCallback}
        startIcon={<ClearIcon />}
      >
        Reset
      </Button>
    </React.Fragment>
  )
};
FormButtons.propTypes = {
  resetCallback: PropTypes.func.isRequired,
  submitCallback: PropTypes.func.isRequired
}

export default FormButtons;
