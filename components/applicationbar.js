import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

const ApplicationBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography component="h1" variant="h6">
        UKPID Level 3
      </Typography>
    </Toolbar>
  </AppBar>
);

export default ApplicationBar;
