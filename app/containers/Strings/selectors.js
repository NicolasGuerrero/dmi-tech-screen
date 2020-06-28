import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the strings state domain
 */

const selectStringsDomain = state => state.strings || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Strings
 */

const makeSelectStrings = () =>
  createSelector(
    selectStringsDomain,
    substate => substate.strings,
  );

const makeSelectStringsLoading = () =>
  createSelector(
    selectStringsDomain,
    substate => substate.loading,
  );

const makeSelectStringsError = () =>
  createSelector(
    selectStringsDomain,
    substate => substate.loading,
  );
export {
  selectStringsDomain,
  makeSelectStrings,
  makeSelectStringsLoading,
  makeSelectStringsError,
};
