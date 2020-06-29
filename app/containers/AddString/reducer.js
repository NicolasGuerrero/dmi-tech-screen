/*
 *
 * AddString reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_STRING_INPUT,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
} from './constants';

export const initialState = {
  adding: false,
  error: false,
  added: false,
  string: '',
};

/* eslint-disable default-case, no-param-reassign */
const addStringReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING_INPUT:
        draft.newString = action.newString;
        break;

      case ADD_STRING:
        draft.adding = true;
        draft.error = false;
        break;

      case ADD_STRING_SUCCESS:
        draft.string = action.string;
        draft.adding = false;
        draft.added = true;
        break;

      case ADD_STRING_ERROR:
        draft.error = action.error;
        draft.adding = false;
        break;
    }
  });

export default addStringReducer;
