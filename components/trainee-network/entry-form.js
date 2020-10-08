import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DmardsSubForm from './dmards-subform';
import BiologicSubForm from './biologic-subform';
import PatientDetails from './patient-details';

const TabBody = (props) => {
  const { tabIndex, patientId } = props;
  switch (tabIndex) {
      case 0:
        return <DmardsSubForm patientId={patientId} />;
      case 1:
        return <BiologicSubForm patientId={patientId} />;
      default:
        return <p>Insert tab body</p>;
    }
};

TabBody.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  patientId: PropTypes.number.isRequired
}

const EntryForm = (props) => {
  const {patientData} = props;
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <Paper>
      <PatientDetails patientData={patientData} />
      <Tabs centered onChange={handleTabChange} value={tab} indicatorColor="primary">
        <Tab label="Disease modifying treatment (DMARDS)" />
        <Tab label="Biological agents" />
      </Tabs>
      <TabBody tabIndex={tab} patientId={patientData.id} />
    </Paper>
  )
};

EntryForm.propTypes = {
  patientData: PropTypes.object.isRequired
};

export default EntryForm;
