import { CALLIN_FETCHING, CALLIN_SUCCESS, CALLIN_FAILED } from '../constant';

const initialState = {
  isError: false,
  isFetching: false,
  isSearch: false,
  result: null,
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CALLIN_FETCHING:
      return { ...state, isFetching: true, isError: false, isSearch: true, }
    case CALLIN_SUCCESS:
      return { ...state, isFetching: false, isError: false, isSearch: true, result: payload }
    case CALLIN_FAILED:
      return { ...state, isFetching: false, isError: true, isSearch: true, }

    default:
      return state
  }
}
