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
    substate => substate,
  );

export default makeSelectAddString;
export { selectAddStringDomain };
