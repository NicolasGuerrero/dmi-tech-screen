/*
 *
 * AddString actions
 *
 */

import {
  CHANGE_STRING_INPUT,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
} from './constants';

export function changeStringInput(newString) {
  console.log('string from actions', newString);
  return {
    type: CHANGE_STRING_INPUT,
    newString,
  };
}

export function addString() {
  return {
    type: ADD_STRING,
  };
}

export function stringAdded(string) {
  return {
    type: ADD_STRING_SUCCESS,
    string,
  };
}

export function stringAddingError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}
