/**
 *
 * AddString
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddString from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AddString() {
  useInjectReducer({ key: 'addString', reducer });
  useInjectSaga({ key: 'addString', saga });

  return (
    <div>
      <Helmet>
        <title>AddString</title>
        <meta name="description" content="Description of AddString" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddString.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addString: makeSelectAddString(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
