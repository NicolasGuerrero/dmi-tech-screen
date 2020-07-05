/**
 * Test sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import { stringAdded, stringAddingError } from 'containers/AddString/actions';
import { ADD_STRING } from '../constants';

import addStringData, { addString } from '../saga';

const testString = 'Test String.';

describe('addString Saga', () => {
  let addStringGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    addStringGenerator = addString();

    const selectDescriptor = addStringGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = addStringGenerator.next(testString).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringAdded action if it requests the data successfully', () => {
    const response = testString;

    const putDescriptor = addStringGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(stringAdded(response, testString)));
  });

  it('should call the stringAddingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = addStringGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringAddingError(response)));
  });
});

describe('addStringData Saga', () => {
  const addStringDataSaga = addStringData();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = addStringDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_STRING, addString));
  });
});
