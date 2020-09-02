import {
  FIND_POPULAR_MOVIES_REQUEST,
  FIND_TOP_RATED_MOVIES_REQUEST
} from '../constants/actions';

export function findPopularMovies(page = 1) {
  return {
    "type": FIND_POPULAR_MOVIES_REQUEST,
    page: page
  };
}

export function findTopRatedMovies(page = 1) {
  return {
    "type": FIND_TOP_RATED_MOVIES_REQUEST,
    page: page
  };
}
