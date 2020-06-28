/*
 *
 * Strings reducer
 *
 */
import produce from 'immer';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  strings: false,
};

/* eslint-disable default-case, no-param-reassign */
const stringsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_STRINGS_SUCCESS:
        draft.strings = action.strings;
        draft.loading = false;
        break;

      case LOAD_STRINGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default stringsReducer;
