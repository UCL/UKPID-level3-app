import React from 'react';

import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';

const FormButtons = () => (
  <React.Fragment>
    <Button
      variant="contained"
      color="primary"
      size="small"
      type="submit"
      startIcon={<SaveIcon />}
    >
      Save
    </Button>
    <Button
      variant="contained"
      color="primary"
      size="small"
      type="reset"
      startIcon={<ClearIcon />}
    >
      Reset
    </Button>
  </React.Fragment>
);

export default FormButtons;
