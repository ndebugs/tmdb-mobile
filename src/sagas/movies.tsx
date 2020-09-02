import {
  FIND_TOP_RATED_MOVIES_REQUEST, FIND_TOP_RATED_MOVIES_SUCCESS, FIND_TOP_RATED_MOVIES_FAILURE
} from '../constants/actions';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/api';

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

export function* watchFindTopRatedMovies() {
  yield takeLatest(FIND_TOP_RATED_MOVIES_REQUEST, findTopRatedMovies);
}
