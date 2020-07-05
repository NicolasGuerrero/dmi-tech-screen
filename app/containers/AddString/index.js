/**
 *
 * AddString
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import AddStringNotifications from 'components/AddStringNotifications';
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
import { changeStringInput, addString, addStringReset } from './actions';

export function AddString({
  newString,
  adding,
  added,
  error,
  onSubmitForm,
  onChangeString,
  reset,
}) {
  useInjectReducer({ key: 'addString', reducer });
  useInjectSaga({ key: 'addString', saga });

  useEffect(() => {
    reset();
  }, []);

  const notificationProps = { adding, added, error };

  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="newString">
          <Input
            id="newString"
            type="text"
            placeholder="Enter a string..."
            value={newString}
            onChange={onChangeString}
          />
          <button type="submit">Submit</button>
        </label>
      </Form>
      <AddStringNotifications {...notificationProps} />
    </div>
  );
}

AddString.propTypes = {
  adding: PropTypes.bool,
  added: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  newString: PropTypes.string,
  reset: PropTypes.func,
  onChangeString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newString: makeSelectAddString(),
  adding: makeSelectAddStringAdding(),
  added: makeSelectAddStringAdded(),
  error: makeSelectAddStringError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeStringInput(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addString());
      dispatch(changeStringInput(''));
    },
    reset: () => dispatch(addStringReset()),
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
