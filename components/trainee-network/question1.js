import React from 'react';

import Typography from '@material-ui/core/Typography';

const question1Text = 'Underlying primary immunodeficiency diagnosis';

const Question1Prompt = () => <Typography>{question1Text}</Typography>;

const Question1Data = () => (
  <Typography>Get this data from the existing database entry</Typography>
);

export { Question1Prompt, Question1Data };
