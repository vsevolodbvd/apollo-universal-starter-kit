import React from 'react';
import PropTypes from 'prop-types';
import MUITable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Table = ({ ...props }) => {
  // console.log('props --->', props);

  return (
    <Paper>
      <MUITable>
        <TableHead>
          <TableRow>
            {props.columns.map(({ title, dataIndex, renderHeader, key }) => (
              <TableCell key={key} align={key === 'actions' ? 'right' : 'left'}>
                {renderHeader ? renderHeader(title, dataIndex) : title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataSource.map(entry => (
            <TableRow key={entry.id}>
              {props.columns.map(({ dataIndex, render, key }) => (
                <TableCell key={key} align={key === 'actions' ? 'right' : 'left'}>
                  {render ? render(entry[dataIndex], entry) : entry[dataIndex]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </Paper>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  dataSource: PropTypes.array,
  columns: PropTypes.array
};

export default Table;