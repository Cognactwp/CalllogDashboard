import { WORKLOAD_FETCHING, WORKLOAD_SUCCESS, WORKLOAD_FAILED } from '../constant';

const initialState = {
  isError: false,
  isFetching: false,
  isSearch: false,
  result: null,
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case WORKLOAD_FETCHING:
      return { ...state, isFetching: true, isError: false, isSearch: true, }
    case WORKLOAD_SUCCESS:
      return { ...state, isFetching: false, isError: false, isSearch: true, result: payload }
    case WORKLOAD_FAILED:
      return { ...state, isFetching: false, isError: true, isSearch: true, }

    default:
      return state
  }
}
