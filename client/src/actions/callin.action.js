import { CALLIN_FETCHING, CALLIN_SUCCESS, CALLIN_FAILED } from '../constant';

export const setCALLINFetchingToState = () => ({
    type: CALLIN_FETCHING
  })
  
  export const setCALLINSuccessToState = (payload) => ({
    type: CALLIN_SUCCESS,
    payload
  })
  
  export const setCALLINFailedToState = () => ({
    type: CALLIN_FAILED,
  })


  export const tablecCallin = (body) => {
    return async (dispatch) => {
      try {
        let { time, year, weekmonth, project } = body;

        dispatch(setCALLINFetchingToState());
        let url = 'http://localhost:8000/callin?time=' + time + '&year=' + year + '&weekmonth=' + weekmonth + '&project=' + project;

        const result = await fetch(url).then(res => {
          return res.json();
        })
  
        dispatch(setCALLINSuccessToState(result.sort((a, b) => a.WK - b.WK)));
  
      } catch (error) {
        dispatch(setCALLINFailedToState(JSON.stringify(error)));
      }
    }
  }