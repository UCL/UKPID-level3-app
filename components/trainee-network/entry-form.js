import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';

import DmardsSubForm from './dmards-subform.js';
import BiologicSubForm from './biologic-subform.js';

import { Question1Data, Question1Prompt } from './question1';
import { Question2Data, Question2Prompt } from './question2';
import { Question3Data, Question3Prompt } from './question3';
import { Question4Data, Question4Prompt } from './question4';
import { Question5Data, Question5Prompt } from './question5';
import { Question6Data, Question6Prompt } from './question6';
import { Question7Data, Question7Prompt } from './question7';
import { Question8Data, Question8Prompt } from './question8';
import { Question9Data, Question9Prompt } from './question9';
import { Question10Data, Question10Prompt } from './question10';

const EntryForm = () => (
  <Paper>
    <DmardsSubForm />
    <Divider />
    <BiologicSubForm />
  </Paper>
);

export default EntryForm;
