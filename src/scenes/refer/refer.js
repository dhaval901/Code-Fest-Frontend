import { useTheme } from '@emotion/react';
import { Button, Card, CardContent, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TextField, Typography, colors } from '@mui/material'
import React from 'react'
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';


const Refer = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const colourMode = useContext(ColorModeContext);

const columns=[{id:'id',name:'Id'},
                {id:'firstname',name:'First Name'},
                {id:'lastname',name:'Last Name'},
                {id:'action',name:'Action'}
              ] 

  return (
    <div>

      This is Tbale 
    <Paper>
    <div>
      <Button variant="contained"> Add New(+)</Button>
    </div>

      <TableContainer>
        <Table>
          <TableHead>
            {columns.map((column) => <TableCell key={column.id}>{column.name}</TableCell>)}

          </TableHead>
          <TableBody>
             {columns.map((column) => <TableCell key={column.id} >{column.name}</TableCell>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

    </div>
  )
}

export default Refer