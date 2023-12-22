import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 1000,
  color: theme.palette.text.primary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: string,
  carbs: string,
) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('1', 1, 'C35H43n7011 @ 0.201 mM', ""),
  createData('Ice cream sandwich', 3, 'cAC10+004885(8)+005718(8)@1.445 mg/kg', "asddfsd")
];

export default function App() {
  return (
    <Box sx={{ minWidth: 1000 }} >
      <StyledPaper>
        <Grid item xs >
          <Typography>Groups</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              {/* <TableHead> */}
              <TableRow>
                <StyledTableCell>Group</StyledTableCell>
                <StyledTableCell align="right">Treatement</StyledTableCell>
                <StyledTableCell align="right">Test Articles (*Basic Test Articles)</StyledTableCell>
                <StyledTableCell align="right">Notes</StyledTableCell>
              </TableRow>
              {/* </TableHead> */}
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          
          <Typography>Collection Schedule</Typography>
          <Typography>Default Collection Schedule</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              {/* <TableHead> */}
              <TableRow>
                <StyledTableCell>Group</StyledTableCell>
                <StyledTableCell align="right">Treatement</StyledTableCell>
                <StyledTableCell align="right">Test Articles (*Basic Test Articles)</StyledTableCell>
                <StyledTableCell align="right">Notes</StyledTableCell>
              </TableRow>
              {/* </TableHead> */}
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          
          <Typography>Collection Schedul2</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              {/* <TableHead> */}
              <TableRow>
                <StyledTableCell>Group</StyledTableCell>
                <StyledTableCell align="right">Treatement</StyledTableCell>
                <StyledTableCell align="right">Test Articles (*Basic Test Articles)</StyledTableCell>
                <StyledTableCell align="right">Notes</StyledTableCell>
              </TableRow>
              {/* </TableHead> */}
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
