import { WORKLOAD_FETCHING, WORKLOAD_SUCCESS, WORKLOAD_FAILED } from '../constant';

export const setWORKLOADFetchingToState = () => ({
    type: WORKLOAD_FETCHING
  })
  
  export const setWORKLOADSuccessToState = (payload) => ({
    type: WORKLOAD_SUCCESS,
    payload
  })
  
  export const setWORKLOADFailedToState = () => ({
    type: WORKLOAD_FAILED,
  })


  export const tableWorkload = (body) => {
    return async (dispatch) => {
      try {
        let { time, year, weekmonth, project } = body;
        
        dispatch(setWORKLOADFetchingToState());
        let url = 'http://localhost:8000/workload?time=' + time + '&year=' + year + '&weekmonth=' + weekmonth + '&project=' + project;

        const result = await fetch(url).then(res => {
          return res.json();
        })
  
        dispatch(setWORKLOADSuccessToState(result));
  
      } catch (error) {
        dispatch(setWORKLOADFailedToState(JSON.stringify(error)));
      }
    }
  }