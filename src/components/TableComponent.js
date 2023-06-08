import React, { useState, useEffect } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody,
  TextField, Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
  Menu, MenuItem
} from '@mui/material';
import './table.scss';
import { ReactComponent as EditSvg } from '../Assets/edit.svg';
import Deets from './Deets';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReactComponent as SearchSvg } from '../Assets/search.svg';

import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemIcon from '@mui/material/ListItemIcon';
import { SortRounded } from '@mui/icons-material';



const options = ['Confirmed', 'Delivered', 'Pending', 'Refund completed (30d)'];


const TableComponent = ({ jsonData }) => {

  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortedData, setSortedData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    setData(jsonData);
    setSortedData(jsonData);
    setDisplayData(jsonData);
  }, [jsonData]);






  const handleSort = () => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(direction);

    const sorted = [...displayData].sort((a, b) => {
      if (direction === 'asc') {
        return a.amount - b.amount;
      } else {
        return b.amount - a.amount;
      }
    });

    setDisplayData(sorted);
  };

  useEffect(() => {
    console.log("sortedData", displayData);
  }, [displayData]);





  const [openDialog, setOpenDialog] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedRowIndex, setEditedRowIndex] = useState(null);

  const handleEditRow = (rowIndex) => {
    const row = data[rowIndex];
    setEditedName(row.Company);
    setEditedRowIndex(rowIndex);
    setOpenDialog(true);
  };


  const handleDialogCancel = () => {
    setOpenDialog(false);
    setEditedName('');
    setEditedRowIndex(null);
  };

  const handleDialogSave = () => {
    // console.log(editedName);
    if (editedRowIndex !== null) {

      const updatedData = [...data];
      updatedData[editedRowIndex].Company = editedName;
      setData(updatedData);
      setDisplayData(updatedData);
    }
    setEditedName('');
    setEditedRowIndex(null);
    setOpenDialog(false);
  };

  const [menuAnchor, setMenuAnchor] = useState(null);
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
    setCheckedOptions(options.filter((option) => checkedOptions.includes(option)));

  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };


  const handleMenuItemClick = (option) => {
    const updatedOptions = [...checkedOptions];
    const optionIndex = updatedOptions.indexOf(option);

    if (optionIndex > -1) {
      updatedOptions.splice(optionIndex, 1); // Remove the option from checkedOptions
    } else {
      updatedOptions.push(option); // Add the option to checkedOptions
    }

    setCheckedOptions(updatedOptions);
  };


  useEffect(() => {
    if (checkedOptions.length) {
      setDisplayData(data.filter((row) => checkedOptions.includes(row.status)));
    }
  }, [data, checkedOptions]);


  return (
    <Table className='table'>
      <TableHead className='table-head'>
        <TableRow className='table-row'>
          <TableCell className='table-cell'><span className='search'><SearchSvg style={{ paddingRight: '0.5rem' }} />Search</span></TableCell>
          {/* <TableCell className='table-cell'><span>Active Orders</span></TableCell> */}
          <TableCell className='table-cell-2'>
            <div className='order-btn' onClick={handleMenuOpen}>Active Orders</div>
            <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
              {options.map((option) => (
                <MenuItem key={option} onClick={() => handleMenuItemClick(option)}>
                  <ListItemIcon>
                    <Checkbox
                      checked={checkedOptions.includes(option)}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CircleIcon />}
                    />
                  </ListItemIcon>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </TableCell>

          <TableCell className='table-cell' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Amount {sortDirection === 'asc' ? <ArrowUpwardIcon onClick={handleSort} style={{ fontSize: '0.75rem', paddingLeft: '0.5rem' }} /> : <ArrowDownwardIcon onClick={handleSort} style={{ fontSize: '0.75rem', paddingLeft: '0.5rem' }} />}</span>
          </TableCell>
          <TableCell className='table-cell'><span>Placed On</span></TableCell>
          <TableCell className='table-cell'><span className='options'>Options</span></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>

        </TableRow>
        {displayData.map((row, index) => (
          <TableRow key={index}>
            <TableCell><Deets row={row} /></TableCell>
            <TableCell style={{ textAlign: 'center' }}>{row.active_order}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{row.amount}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{row.placed_on}</TableCell>
            <TableCell>
              <Button onClick={() => handleEditRow(index)}><EditSvg /></Button>
            </TableCell>
          </TableRow>
        ))}
        <Dialog open={openDialog} onClose={handleDialogCancel}>
          <DialogTitle>Edit Name</DialogTitle>
          <DialogContent>
            <TextField
              style={{ marginTop: '1rem' }}
              label="Name"
              value={editedName}
              onChange={(event) => setEditedName(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogCancel}>Cancel</Button>
            <Button onClick={handleDialogSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </TableBody>
    </Table>
  );
};

export default TableComponent;
