import { all, fork } from 'redux-saga/effects';
import { watchFindPopularMovies, watchFindTopRatedMovies } from './movies';

export default function* rootSaga() {
  yield all([
    fork(watchFindPopularMovies),
    fork(watchFindTopRatedMovies)
  ]);
};
