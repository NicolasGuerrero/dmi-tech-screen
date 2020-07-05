import {
  addStringReset,
  changeStringInput,
  addString,
  stringAdded,
  stringAddingError,
} from '../actions';

import {
  ADD_STRING_RESET,
  CHANGE_STRING_INPUT,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
} from '../constants';

describe('AddString RESET actions', () => {
  describe('addStringReset Action', () => {
    it('has a type of ADD_STRING_RESET', () => {
      const expected = {
        type: ADD_STRING_RESET,
      };
      expect(addStringReset()).toEqual(expected);
    });
  });
});

describe('AddString actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CHANGE_STRING_INPUT,
      };
      expect(changeStringInput()).toEqual(expected);
    });
  });
});

describe('AddString actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: ADD_STRING,
      };
      expect(addString()).toEqual(expected);
    });
  });
});

describe('AddString actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: ADD_STRING_SUCCESS,
      };
      expect(stringAdded()).toEqual(expected);
    });
  });
});

describe('AddString actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: ADD_STRING_ERROR,
      };
      expect(stringAddingError()).toEqual(expected);
    });
  });
});
