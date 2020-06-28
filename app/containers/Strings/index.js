/**
 *
 * Strings
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
import makeSelectStrings from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Strings() {
  useInjectReducer({ key: 'strings', reducer });
  useInjectSaga({ key: 'strings', saga });

  return (
    <div>
      <Helmet>
        <title>Strings</title>
        <meta name="description" content="Description of Strings" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Strings.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
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
)(Strings);
