import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ApplicationBar from '../components/applicationbar';
import SideBar from '../components/sidebar';
import EntryList from '../components/entry-list';
import EntryForm from '../components/trainee-network/entry-form';

const IndexBody = (props) => {
  const {
    patientId,
    centreId,
    setEntryCallback
  } = props;
  const hasPatientid = !Number.isNaN(patientId);
  if (hasPatientid) {
    return <EntryForm patientId={patientId} />;
  }
  return (
    <EntryList
      centreId={centreId}
      setEntryCallback={setEntryCallback}
    />
  );
};

IndexBody.propTypes = {
  patientId: PropTypes.number.isRequired,
  centreId: PropTypes.number.isRequired,
  setEntryCallback: PropTypes.func.isRequired
};

const Index = () => {
  const centreId = 10000;
  const [patientId, setPatientId] = useState(NaN);
  const setEntryCallback = (e, entryId) => {
    setPatientId(entryId);
  };
  return (
    <div>
      <ApplicationBar />
      <SideBar />
      <IndexBody
        patientId={patientId}
        centreId={centreId}
        setEntryCallback={setEntryCallback}
      />
    </div>
  )
};

export default Index;
