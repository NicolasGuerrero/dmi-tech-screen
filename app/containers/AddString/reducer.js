/*
 *
 * AddString reducer
 *
 */
import produce from 'immer';
import {
  ADD_STRING_RESET,
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
      case ADD_STRING_RESET:
        draft.adding = false;
        draft.error = false;
        draft.added = false;
        draft.string = '';
        break;

      case CHANGE_STRING_INPUT:
        draft.newString = action.newString;
        draft.error = false;
        draft.added = false;
        break;

      case ADD_STRING:
        draft.adding = true;
        draft.added = false;
        draft.error = false;
        break;

      case ADD_STRING_SUCCESS:
        draft.string = action.string;
        draft.adding = false;
        draft.error = false;
        draft.added = true;
        break;

      case ADD_STRING_ERROR:
        draft.error = action.error;
        draft.added = false;
        draft.adding = false;
        break;
    }
  });

export default addStringReducer;
