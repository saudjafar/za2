import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TextField, MenuItem, Button } from '@mui/material';

const options = ['confirmed', 'delivered', 'pending', 'refund'];

const TableComponent = ({ jsonData }) => {
  const [activeOrderFilter, setActiveOrderFilter] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setData(jsonData);
    setFilteredData(jsonData);
  }, [jsonData]);

  const handleActiveOrderFilterChange = (event) => {
    setActiveOrderFilter(event.target.value);
  };

  const handleEditRow = (rowIndex) => {
    // Handle edit row functionality
    console.log('Edit row:', rowIndex);
  };

  useEffect(() => {
    setFilteredData (activeOrderFilter ? data.filter((item) => item.status == activeOrderFilter) : data);
    console.log('Filtered data:', filteredData);

    
  }, [activeOrderFilter])
  
  
  return (
    <Table>
      <TableHead>
        <TableRow>
        
          <TableCell>Search</TableCell>
          <TableCell>Active Orders</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Placed On</TableCell>
          <TableCell>Options</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <TextField
              select
              value={activeOrderFilter}
              onChange={handleActiveOrderFilterChange}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        {filteredData.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.active_order}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.placed_on}</TableCell>
            <TableCell>
              <Button onClick={() => handleEditRow(index)}>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
