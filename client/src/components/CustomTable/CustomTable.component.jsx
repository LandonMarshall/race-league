import React from 'react';
import { Table, TableBody,TableCell, TableContainer,
  TableHead, TableRow, Paper } from '@material-ui/core';

import { useStyles } from './CustomTable.styles';


const CustomTable = ({
  data, columns,
}) => {
 const classes = useStyles();
  return (
    <Paper className={classes.paper} square>
      <TableContainer className={classes.container}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.key} align={column.align}>
                  {column.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow hover key={item.id} data-cy="table-row">
                  {columns.map((column) => (
                    <TableCell key={column.key} align={column.align || 'inherit'}>{column.value(item)}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
