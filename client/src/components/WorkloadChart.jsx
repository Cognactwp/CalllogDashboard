import React, {  } from "react";
import {  useSelector } from 'react-redux';
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


const WorkloadChart = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const onPieEnter = (_, index) => {
  //   setActiveIndex(index);
  // };

  const workloadReducer = useSelector((state) => state.workloadReducer);

  if (!workloadReducer.result) return <p>Loading ...</p>
  return (
    <ResponsiveContainer width="100%" height={337}>
        <LineChart width={500} height={300} data={workloadReducer.result.sort((a, b) => a.WK - b.WK)}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="DATE" padding={{ left: 10, right: 0 }}  size="small"/>
          <YAxis />
          <Tooltip />
          
          <Line type="monotone" dataKey="Helpdesk" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Support" stroke="#82ca9d" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="Tier3" stroke="#0088FE" activeDot={{ r: 8 }}/>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default WorkloadChart
