import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { rows } from "../data.js";
import { useDispatch, useSelector } from 'react-redux';
import * as dashboardActions from '../actions/dashboard.action';
import { CircularProgress } from "@mui/material";


const CasesTable = () => {

  const dispatch = useDispatch();
  const dashboardReducer = useSelector((state) => state.dashboardReducer);

  useEffect(() => {
    dispatch(dashboardActions.tableProblem());
  
    
  }, [])

  if (!dashboardReducer.result) return <CircularProgress />

  
  


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table" size="small" >
        <TableHead>
          <TableRow>
            <TableCell sx = {{fontWeight: 'bold'}}>Group of Problem case</TableCell>
            <TableCell sx = {{fontWeight: 'bold'}} align="right">Case&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dashboardReducer.result.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.value}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell sx = {{fontWeight: 'bold'}} >
              Total
            </TableCell>
            <TableCell align="right" sx = {{fontWeight: 'bold'}} >
              {dashboardReducer.result.length > 0 ? dashboardReducer.result.map(row => row.value).reduce((a,b) => a+b) : 0}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CasesTable;
