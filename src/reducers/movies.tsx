import {
  FIND_POPULAR_MOVIES_REQUEST, FIND_POPULAR_MOVIES_SUCCESS, FIND_POPULAR_MOVIES_FAILURE,
  FIND_TOP_RATED_MOVIES_REQUEST, FIND_TOP_RATED_MOVIES_SUCCESS, FIND_TOP_RATED_MOVIES_FAILURE
} from '../constants/actions';

const defaultState = { data: null, loading: false, error: null };

export const popularMovies = (state = defaultState, action) => {
  switch (action.type) {
    case FIND_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FIND_POPULAR_MOVIES_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const topRatedMovies = (state = defaultState, action) => {
  switch (action.type) {
    case FIND_TOP_RATED_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FIND_TOP_RATED_MOVIES_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_TOP_RATED_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
