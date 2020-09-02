import { all, fork } from 'redux-saga/effects';
import { watchFindPopularMovies, watchFindTopRatedMovies } from './movies';
import { watchFindPopularTV, watchFindTopRatedTV } from './tv';

export default function* rootSaga() {
  yield all([
    fork(watchFindPopularMovies), fork(watchFindTopRatedMovies),
    fork(watchFindPopularTV), fork(watchFindTopRatedTV)
  ]);
};
