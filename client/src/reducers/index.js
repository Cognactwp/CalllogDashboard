import { combineReducers } from 'redux';
import dashboardReducer from './dashboard.reducer';
import workloadReducer from './workload.reducer';
import callinReducer from './callin.reducer'


export default combineReducers({
    dashboardReducer,workloadReducer,callinReducer
})
