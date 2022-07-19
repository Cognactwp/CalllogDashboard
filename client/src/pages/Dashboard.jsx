import * as React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Filter from '../components/Filter';
import CasesChart from '../components/CasesChart';
import CasesTable from '../components/CasesTable';
import WorkloadTable from '../components/WorkloadTable';
import WorkloadChart from '../components/WorkloadChart'; 
import CallinLineChart from '../components/CallinLineChart'; 
import CallinPieChart from '../components/CallinPieChart'; 
import { useDispatch, useSelector } from 'react-redux';
import { tablecCallin } from '../actions/callin.action';
import { tableProblem } from '../actions/dashboard.action';
import { current_week } from '../global';
import { CircularProgress } from '@mui/material';







const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Dashboard() {
  const dispatch = useDispatch();
  const callinReducer = useSelector((state) => state.callinReducer);
  const workloadReducer = useSelector((state) => state.workloadReducer);
  const dashboardReducer = useSelector((state) => state.dashboardReducer);

  React.useEffect(() => {
    dispatch(tablecCallin({ time: 7, year: new Date().getFullYear(), weekmonth: current_week(), project: 0}));
    dispatch(tableProblem({ time: 7, year: new Date().getFullYear(), weekmonth: current_week(), project: 0}));
  }, [])
  
  if (!callinReducer.result || !dashboardReducer.result) {
    return <CircularProgress />
  }



  return (
    <Container maxWidth="lg" sx={{bgcolor: '#DCDCDC', paddingTop:'20px', paddingBottom:'20px' , marginTop:'20px' , border:1, borderRadius: '10px', borderColor:'white'}}>
    <Box sx={{ flexGrow: 1  }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Filter/>
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item>
            <CasesTable/>
        </Item>
        </Grid>
        <Grid item xs={6}>
        <Item>
            <CasesChart/>
        </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <WorkloadTable/>
          <br></br>
          <h5 sx={{  }}>* Tier 3 = SA + App Server + Network + System + CGC</h5>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <WorkloadChart/>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>xs=12</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <CallinLineChart/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <CallinPieChart/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
