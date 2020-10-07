import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import {getRequest} from './trainee-network/request-controller';

const EntryList = (props) => {
  const {centreId, setEntryCallback} = props;
  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    getRequest(`rest/${centreId}/plist`)
      .then(res => {
        if (!res.error && res.json) {
          setEntryList(res.json);
        }
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {
            entryList.map((entry) => (
              <TableRow
                hover
                key={entry.id}
                onClick={(e) => setEntryCallback(e, entry.id)}
              >
                <TableCell>{entry.id}</TableCell>
                <TableCell>{entry.gender}</TableCell>
                <TableCell>{entry.yob}</TableCell>
                <TableCell>{entry.pid}</TableCell>
                <TableCell>{entry.centre}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
};

EntryList.propTypes = {
  centreId: PropTypes.number.isRequired,
  setEntryCallback: PropTypes.func.isRequired
};

export default EntryList;
