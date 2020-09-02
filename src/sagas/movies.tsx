import {
  FIND_POPULAR_MOVIES_REQUEST, FIND_POPULAR_MOVIES_SUCCESS, FIND_POPULAR_MOVIES_FAILURE,
  FIND_TOP_RATED_MOVIES_REQUEST, FIND_TOP_RATED_MOVIES_SUCCESS, FIND_TOP_RATED_MOVIES_FAILURE
} from '../constants/actions';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/api';

function* findPopularMovies(action) {
  const { page = 1 } = action || {};

  try {
    const data = yield commonAxios.get('/movie/popular', {
      params: { page }
    });
    
    yield put({
      type: FIND_POPULAR_MOVIES_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: FIND_POPULAR_MOVIES_FAILURE,
      error: error
    });
  }
}

function* findTopRatedMovies(action) {
  const { page = 1 } = action || {};

  try {
    const data = yield commonAxios.get('/movie/top_rated', {
      params: { page }
    });
    
    yield put({
      type: FIND_TOP_RATED_MOVIES_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: FIND_TOP_RATED_MOVIES_FAILURE,
      error: error
    });
  }
}

export function* watchFindPopularMovies() {
  yield takeLatest(FIND_POPULAR_MOVIES_REQUEST, findPopularMovies);
}

export function* watchFindTopRatedMovies() {
  yield takeLatest(FIND_TOP_RATED_MOVIES_REQUEST, findTopRatedMovies);
}
