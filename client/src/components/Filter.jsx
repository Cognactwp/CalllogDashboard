import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { current_week, getDateRangeOfWeek } from "../global";
import { tablecCallin } from "../actions/callin.action";
import { tableProblem } from "../actions/dashboard.action"
import { useDispatch } from "react-redux";
import { months } from "../global";
import { tableWorkload } from "../actions/workload.action";
// import Stack from '@mui/material/Stack';

const CasesFilter = () => {
  const [range, setRange] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    const currentWeek = current_week();
    let arr_range = [];
    
    for(let i=0; i<8; i++) {
      arr_range.push({range:getDateRangeOfWeek(currentWeek-i), week_number: currentWeek-i})
    }
    setRange(arr_range);
    setWeekMonth(currentWeek);

  }, [])
  

  const [time, setTime] = React.useState(7);
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const [year, setYear] = React.useState(new Date().getFullYear());
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const [weekmonth, setWeekMonth] = React.useState("");
  const handleChangeWeekMonth = (event) => {
    setWeekMonth(event.target.value);
    console.log(event.target.value);
  };

  const [project, setProject] = React.useState(0);
  const handleChangeProject = (event) => {
    setProject(event.target.value);
  };

  const filterData = () => {
    dispatch(tablecCallin({ time, year, weekmonth, project }));
    dispatch(tableProblem({ time, year, weekmonth, project }));
    dispatch(tableWorkload({ time, year, weekmonth, project }));
  }


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select value={time} defaultValue={7} onChange={handleChange}>
          <MenuItem value={7}>รายสัปดาห์</MenuItem>
          <MenuItem value={30}>รายเดือน</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select value={year} defaultValue={2022}  onChange={handleChangeYear}>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        {weekmonth && time === 7 ?

        <Select value={weekmonth} defaultValue={weekmonth} onChange={handleChangeWeekMonth}>
          {range.map((week) => {
            return <MenuItem key={week.week_number} value={week.week_number}>{week.range}</MenuItem>
          })}
        </Select> : 
        <Select value={weekmonth} defaultValue={weekmonth} onChange={handleChangeWeekMonth}>
        {months.filter(month => month.key <= new Date().getMonth()+ 1).map((month, i) => {
          return <MenuItem key={month.key} value={month.key}>{month.name}</MenuItem>
        })}
        </Select>
        
        }
        
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select value={project} onChange={handleChangeProject} >
          <MenuItem value={0}>ทุกโครงการ</MenuItem>
          <MenuItem value={1}>DOL 1</MenuItem>
          <MenuItem value={2}>DOL 2</MenuItem>
          <MenuItem value={4}>DOL 4</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={filterData} sx={{ margin: "10px" }} variant="outlined">
        filter
      </Button>
      <Button variant="outlined">reset</Button>
    </div>
  );
};

export default CasesFilter;
