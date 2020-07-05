import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addString state domain
 */

const selectAddString = state => state.addString || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddString
 */

const makeSelectAddString = () =>
  createSelector(
    selectAddString,
    substate => substate.newString,
  );

const makeSelectAddStringAdding = () =>
  createSelector(
    selectAddString,
    substate => substate.adding,
  );

const makeSelectAddStringAdded = () =>
  createSelector(
    selectAddString,
    substate => substate.added,
  );

const makeSelectAddStringError = () =>
  createSelector(
    selectAddString,
    substate => substate.error,
  );

export {
  selectAddString,
  makeSelectAddString,
  makeSelectAddStringAdding,
  makeSelectAddStringAdded,
  makeSelectAddStringError,
};
