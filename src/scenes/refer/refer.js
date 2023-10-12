import { useTheme } from '@emotion/react';
import { Button, Card, CardContent, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, colors } from '@mui/material'
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
    <Paper sx={{margin: '1%'}} >
    <div style={{margin: '1%'}}>
      <Button variant="contained" style={{color: 'grey'}}> Add New(+)</Button>
    </div>
        <div style={{ margin: '1%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{background: 'midnightblue'}}></TableRow>
            {columns.map((column) => <TableCell key={column.id}>{column.name}</TableCell>)}

          </TableHead>
          <TableBody>
          
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </Paper>

    </div>
  )
}

export default Refer