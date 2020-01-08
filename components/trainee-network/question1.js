import React from 'react';

import Typography from '@material-ui/core/Typography';

const question1Text = '1. What is the underlying primary immunodeficiency diagnosis?';

const Question1Prompt = () => (
  <Typography>
    {question1Text}
  </Typography>
);

const Question1Data = () => (
  <Typography>
    Mock data
  </Typography>
);

export {
  Question1Prompt,
  Question1Data,
};
