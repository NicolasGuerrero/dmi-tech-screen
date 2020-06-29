import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addString state domain
 */

const selectAddStringDomain = state => state.addString || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddString
 */

const makeSelectAddString = () =>
  createSelector(
    selectAddStringDomain,
    substate => substate.newString,
  );

const makeSelectAddStringAdding = () =>
  createSelector(
    selectAddStringDomain,
    substate => substate.adding,
  );

const makeSelectAddStringAdded = () =>
  createSelector(
    selectAddStringDomain,
    substate => substate.added,
  );

const makeSelectAddStringError = () =>
  createSelector(
    selectAddStringDomain,
    substate => substate.error,
  );

export {
  selectAddStringDomain,
  makeSelectAddString,
  makeSelectAddStringAdding,
  makeSelectAddStringAdded,
  makeSelectAddStringError,
};
