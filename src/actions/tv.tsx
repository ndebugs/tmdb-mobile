import {
  FIND_POPULAR_TV_REQUEST,
  FIND_TOP_RATED_TV_REQUEST
} from '../constants/actions';

export function findPopularTV(page = 1) {
  return {
    "type": FIND_POPULAR_TV_REQUEST,
    page: page
  };
}

export function findTopRatedTV(page = 1) {
  return {
    "type": FIND_TOP_RATED_TV_REQUEST,
    page: page
  };
}
