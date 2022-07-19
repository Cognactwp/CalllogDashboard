import { PROBLEM_FETCHING, PROBLEM_SUCCESS, PROBLEM_FAILED } from '../constant';

const initialState = {
  isError: false,
  isFetching: false,
  isSearch: false,
  result: null,
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROBLEM_FETCHING:
      return { ...state, isFetching: true, isError: false, isSearch: true, }
    case PROBLEM_SUCCESS:
      return { ...state, isFetching: false, isError: false, isSearch: true, result: payload }
    case PROBLEM_FAILED:
      return { ...state, isFetching: false, isError: true, isSearch: true, }

    default:
      return state
  }
}
