import {
  FIND_TOP_RATED_MOVIES_REQUEST
} from '../constants/actions';

export function findTopRatedMovies(page = 1) {
  return {
    "type": FIND_TOP_RATED_MOVIES_REQUEST,
    page: page
  };
}
