import {
  FIND_POPULAR_TV_REQUEST, FIND_POPULAR_TV_SUCCESS, FIND_POPULAR_TV_FAILURE,
  FIND_TOP_RATED_TV_REQUEST, FIND_TOP_RATED_TV_SUCCESS, FIND_TOP_RATED_TV_FAILURE
} from '../constants/actions';

const defaultState = { data: null, loading: false, error: null };

export const popularTV = (state = defaultState, action) => {
  switch (action.type) {
    case FIND_POPULAR_TV_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FIND_POPULAR_TV_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_POPULAR_TV_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const topRatedTV = (state = defaultState, action) => {
  switch (action.type) {
    case FIND_TOP_RATED_TV_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FIND_TOP_RATED_TV_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_TOP_RATED_TV_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
