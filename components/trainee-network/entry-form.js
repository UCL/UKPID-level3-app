import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DmardsSubForm from './dmards-subform';
import BiologicSubForm from './biologic-subform';
import PatientDetails from './patient-details';

const TabBody = (props) => {
  const { tabIndex } = props;
  switch (tabIndex) {
      case 0:
        return <DmardsSubForm patientId={1} />;
      case 1:
        return <BiologicSubForm patientId={1} />;
      default:
        return <p>Insert tab body</p>;
    }
};

TabBody.propTypes = {
  tabIndex: PropTypes.number.isRequired
}

const EntryForm = () => {
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <Paper>
      <PatientDetails />
      <Tabs centered onChange={handleTabChange} value={tab} indicatorColor="primary">
        <Tab label="Disease modifying treatment (DMARDS)" />
        <Tab label="Biological agents" />
      </Tabs>
      <TabBody tabIndex={tab} />
    </Paper>
  )
};

export default EntryForm;
