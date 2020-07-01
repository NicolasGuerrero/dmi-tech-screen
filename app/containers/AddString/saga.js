import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_STRING } from 'containers/AddString/constants';
import { stringAdded, stringAddingError } from 'containers/AddString/actions';
import request from 'utils/request';
import { makeSelectAddString } from './selectors';

// Individual exports for testing
export function* addString() {
  // See example in containers/HomePage/saga.js

  const inputString = yield select(makeSelectAddString());
  const requestURL = `/api/strings`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputString }),
  };
  try {
    const addedString = yield call(request, requestURL, options);
    yield put(stringAdded(addedString));
  } catch (err) {
    console.log('from saga', err);
    yield put(stringAddingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* addStringData() {
  // Watches for ADD_STRING actions and calls addString when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_STRING, addString);
}
