/**
 *
 * AddString
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectAddString,
  makeSelectAddStringAdding,
  makeSelectAddStringAdded,
  makeSelectAddStringError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Form from './Form';
import Input from './Input';
import { changeStringInput, addString } from './actions';

// not using adding, added, and error as props yet. need to use/put back in
export function AddString({ newString, onSubmitForm, onChangeString }) {
  useInjectReducer({ key: 'addString', reducer });
  useInjectSaga({ key: 'addString', saga });

  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="newString">
          <Input
            id="newString"
            type="text"
            placeholder="Enter a string"
            value={newString}
            onChange={onChangeString}
          />
        </label>
      </Form>
    </div>
  );
}

AddString.propTypes = {
  // adding: PropTypes.bool,
  // added: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  newString: PropTypes.string,
  onChangeString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newString: makeSelectAddString(),
  adding: makeSelectAddStringAdding(),
  added: makeSelectAddStringAdded(),
  error: makeSelectAddStringError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeStringInput(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addString());
      dispatch(changeStringInput(''));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddString);
