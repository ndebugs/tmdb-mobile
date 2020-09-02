import {
  FIND_POPULAR_TV_REQUEST, FIND_POPULAR_TV_SUCCESS, FIND_POPULAR_TV_FAILURE,
  FIND_TOP_RATED_TV_REQUEST, FIND_TOP_RATED_TV_SUCCESS, FIND_TOP_RATED_TV_FAILURE
} from '../constants/actions';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/api';

function* findPopularTV(action) {
  const { page = 1 } = action || {};

  try {
    const data = yield commonAxios.get('/tv/popular', {
      params: { page }
    });
    
    yield put({
      type: FIND_POPULAR_TV_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: FIND_POPULAR_TV_FAILURE,
      error: error
    });
  }
}

function* findTopRatedTV(action) {
  const { page = 1 } = action || {};

  try {
    const data = yield commonAxios.get('/tv/top_rated', {
      params: { page }
    });
    
    yield put({
      type: FIND_TOP_RATED_TV_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: FIND_TOP_RATED_TV_FAILURE,
      error: error
    });
  }
}

export function* watchFindPopularTV() {
  yield takeLatest(FIND_POPULAR_TV_REQUEST, findPopularTV);
}

export function* watchFindTopRatedTV() {
  yield takeLatest(FIND_TOP_RATED_TV_REQUEST, findTopRatedTV);
}
