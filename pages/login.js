import React, {useState} from 'react';

import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import ApplicationBar from '../components/applicationbar';

import { postRequest } from '../requests/http-calls';
import { useAuth } from '../providers/auth';
import withoutAuth from '../hoc/without-auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { setAuthenticated } = useAuth();

  const resetAction = () => {
    setUsername('');
    setPassword('');
  };

  const formAction = (e) => {
    e.preventDefault();
    postRequest('/rest/login', {username, password})
      .then(res => {
        if (!res.error && res.status === 200) {
          setAuthenticated(true);
        } else {
          setError(true);
        }
      });
  };

  return (
    <div>
      <CssBaseline />
      <ApplicationBar />
      <Paper>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={formAction}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                id="username"
                label="Username"
                name="username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                startIcon={<LockOpenIcon />}
              >
                Log in
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="reset"
                onClick={resetAction}
                startIcon={<ClearIcon />}
              >
                Reset
              </Button>
            </Grid>
            {
              (error) && (
                <Grid item xs={12}>
                  <Alert severity="error">Login failed</Alert>
                </Grid>
              )
            }
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default withoutAuth(Login);
