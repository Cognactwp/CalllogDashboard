import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as callinActions from '../actions/callin.action';
import { CircularProgress } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // ReferenceLine,
  ResponsiveContainer,
} from 'recharts';


const CallinLineChart = () => {

  const dispatch = useDispatch();
  const callinReducer = useSelector((state) => state.callinReducer);

  useEffect(() => {
    dispatch(callinActions.tablecCallin());
    
  
    
  }, [])

  if (!callinReducer.result) return <></>

  return (
    <ResponsiveContainer width="100%" height={337}>
        <LineChart width={500} height={300} data={callinReducer.result}>
          <CartesianGrid strokeDasharray="5 5" />

          <XAxis dataKey="DATE" padding={{ left: 10, right: 0 }}  size="small"/>
          <YAxis />
          <Tooltip />
          
          <Line type="monotone" dataKey="DOL1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="DOL2" stroke="#82ca9d" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="DOL4" stroke="#0088FE" activeDot={{ r: 8 }}/>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default CallinLineChart
