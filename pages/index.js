import React, {useState} from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

import ApplicationBar from '../components/applicationbar';
import SideBar from '../components/sidebar';
import EntryList from '../components/entry-list';
import EntryForm from '../components/trainee-network/entry-form';

import withAuth from '../hoc/with-auth';

const IndexBody = (props) => {
  const {
    patient,
    centreId,
    setEntryCallback
  } = props;
  const hasPatientid = !Number.isNaN(patient.id);
  if (hasPatientid) {
    return <EntryForm patientData={patient} />;
  }
  return (
    <EntryList
      centreId={centreId}
      setEntryCallback={setEntryCallback}
    />
  );
};

IndexBody.propTypes = {
  patient: PropTypes.object.isRequired,
  centreId: PropTypes.number.isRequired,
  setEntryCallback: PropTypes.func.isRequired
};

const Index = () => {
  const centreId = 10000;
  const [patient, setPatient] = useState({
    id: NaN,
    gender: '',
    yob: NaN,
    pid: ''
  });
  const setEntryCallback = (e, entry) => {
    setPatient(entry);
  };
  return (
    <div>
      <CssBaseline />
      <ApplicationBar />
      <SideBar />
      <IndexBody
        patient={patient}
        centreId={centreId}
        setEntryCallback={setEntryCallback}
      />
    </div>
  )
};

export default withAuth(Index);
