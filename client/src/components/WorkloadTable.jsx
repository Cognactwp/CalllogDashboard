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
import * as workloadActions from '../actions/workload.action';
import { CircularProgress } from "@mui/material";


const CasesTable = () => {

  const dispatch = useDispatch();
  const workloadReducer = useSelector((state) => state.workloadReducer);

  useEffect(() => {
    dispatch(workloadActions.tableWorkload());
  
    
  }, [])

  if (!workloadReducer.result) return <CircularProgress />
  


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table" size="small" >
        <TableHead>
          <TableRow>
            <TableCell sx = {{fontWeight: 'bold'}} >Date</TableCell>
            <TableCell sx = {{fontWeight: 'bold'}} align="right">Helpdesk&nbsp;</TableCell>
            <TableCell sx = {{fontWeight: 'bold'}} align="right">Support&nbsp;</TableCell>
            <TableCell sx = {{fontWeight: 'bold'}} align="right">Tier 3&nbsp;</TableCell>
            <TableCell sx = {{fontWeight: 'bold'}} align="right">Total&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workloadReducer.result.sort((a, b) => b.WK - a.WK).map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.DATE}
              </TableCell>
              <TableCell align="right">
                {row.Helpdesk}</TableCell>
                <TableCell align="right">
                {row.Support}</TableCell>
                <TableCell align="right">
                {row.Tier3}</TableCell>
                <TableCell align="right" sx = {{fontWeight: 'bold'}}>
                {row.TOTAL}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CasesTable;
