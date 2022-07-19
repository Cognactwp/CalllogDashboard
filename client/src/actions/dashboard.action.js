import { PROBLEM_FETCHING, PROBLEM_SUCCESS, PROBLEM_FAILED } from '../constant';

export const setPROBLEMFetchingToState = () => ({
    type: PROBLEM_FETCHING
  })
  
  export const setPROBLEMSuccessToState = (payload) => ({
    type: PROBLEM_SUCCESS,
    payload
  })
  
  export const setPROBLEMFailedToState = () => ({
    type: PROBLEM_FAILED,
  })


  export const tableProblem = (body) => {
    return async (dispatch) => {
      try {
        let { time, year, weekmonth, project } = body;

        dispatch(setPROBLEMFetchingToState());
        let url = 'http://localhost:8000/cases?time=' + time + '&year=' + year + '&weekmonth=' + weekmonth + '&project=' + project;
        
        const result = await fetch(url).then(res => {
          return res.json();
        })
  
        dispatch(setPROBLEMSuccessToState(result));
  
      } catch (error) {
        dispatch(setPROBLEMFailedToState(JSON.stringify(error)));
      }
    }
  }