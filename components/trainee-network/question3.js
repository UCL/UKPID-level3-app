import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const question3Text = '3. Which biological agent has been used?';
const anticd20Text = 'Anti-CD20 depleting monoclonal antibody';
const antiTnfsText = 'Anti-TNFs monoclonal antibody';
const ctla4Text = 'CTLA-4 Ig';
const antiIl6Text = 'Anti-IL-6 or IL-6R monoclonal';
const antiIl4Text = 'Anti-IL-4 (dupiliumab), anti-IL-5 (mepolizumab), or anti-IgE (omalizumab)';
const antiIl1Text = 'Anti-IL-1 therapy';
const jakInhText = 'Small molecule JAK/STAT inhibitors';
const il12Text = 'IL-12p40 (Ustakinumab), IL-23 (Guselkumab)';
const antiIl17Text = 'Anti IL-17';
const otherAntiNeoText = ' Other anti-neoplastic biologics including checkpoint blockade and other depleting antibodies';

const Question3Prompt = () => <Typography>{question3Text}</Typography>;

const Question3Data = () => (
  <FormControl>
    <Select value="biological-agent-category">
      <MenuItem value="anti-cd20">{anticd20Text}</MenuItem>
      <MenuItem value="anti-tnfs">{antiTnfsText}</MenuItem>
      <MenuItem value="ctla4">{ctla4Text}</MenuItem>
      <MenuItem value="antiIl6">{antiIl6Text}</MenuItem>
      <MenuItem value="antiIl4">{antiIl4Text}</MenuItem>
      <MenuItem value="antiIl1">{antiIl1Text}</MenuItem>
      <MenuItem value="jakInh">{jakInhText}</MenuItem>
      <MenuItem value="il12">{il12Text}</MenuItem>
      <MenuItem value="antiIl17">{antiIl17Text}</MenuItem>
      <MenuItem value="otherAntiNeo">{otherAntiNeoText}</MenuItem>
    </Select>
  </FormControl>
);

export { Question3Data, Question3Prompt };
