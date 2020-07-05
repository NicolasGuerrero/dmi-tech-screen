// import { selectAddStringDomain } from '../selectors';

import {
  selectAddString,
  makeSelectAddString,
  makeSelectAddStringAdding,
} from '../selectors';

describe('selectAddString', () => {
  it('should select the addString state', () => {
    const subState = {
      adding: false,
      error: false,
      added: false,
      newString: '',
    };
    const mockedState = {
      addString: subState,
    };
    expect(selectAddString(mockedState)).toEqual(subState);
  });
});

describe('makeSelectAddString', () => {
  const addStringSelector = makeSelectAddString();
  it('should select the username', () => {
    const newString = 'Test String.';
    const mockedState = {
      addString: {
        newString,
      },
    };
    expect(addStringSelector(mockedState)).toEqual(newString);
  });
});

describe('makeSelectAddStringAdding', () => {
  const addStringAddingSelector = makeSelectAddStringAdding();
  it('should select the username', () => {
    const adding = true;
    const mockedState = {
      addString: {
        adding,
      },
    };
    expect(addStringAddingSelector(mockedState)).toEqual(adding);
  });
});
