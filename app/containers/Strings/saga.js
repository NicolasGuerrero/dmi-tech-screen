import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/Strings/constants';
import { stringsLoaded, stringsLoadingError } from 'containers/Strings/actions';

import request from 'utils/request';

// Individual exports for testing
export function* getStrings() {
  const requestURL = '/api/strings';

  try {
    const strings = yield call(request, requestURL);
    console.log(strings);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_STRINGS actions and calls getStrings when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STRINGS, getStrings);
}
