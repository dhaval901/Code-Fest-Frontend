import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const Refer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Define your data array to populate the table.
  const data = [
    { id: 1, firstname: 'John', lastname: 'Doe' },
    { id: 2, firstname: 'Jane', lastname: 'Smith' },
    // Add more data here.
  ];

  const columns = [
    { id: 'id', name: 'Id' },
    { id: 'firstname', name: 'First Name' },
    { id: 'lastname', name: 'Last Name' },
    { id: 'action', name: 'Action' },
  ];

  return (
    <div>
      <Paper>
        <div>
          <Button onClick={handleOpen} variant="contained">
            Add New(+)
          </Button>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => 
                  <TableCell key={column.id}>{column.name}</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
        
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Refer the Person</DialogTitle>
        <DialogContent>
          <form>
            <TextField variant="outlined" label="Name" />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Refer;