import { all, fork } from 'redux-saga/effects';
import { watchFindTopRatedMovies } from './movies';

export default function* rootSaga() {
  yield all([
    fork(watchFindTopRatedMovies)
  ]);
};
