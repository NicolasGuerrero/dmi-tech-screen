/**
 *
 * Strings
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import StringsList from 'components/StringsList';
import {
  makeSelectStrings,
  makeSelectStringsLoading,
  makeSelectStringsError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import { loadStrings } from './actions';
// NG - Need to add in {strings, loading, error} into props
export function Strings({ strings, loading, error, onStart }) {
  useInjectReducer({ key: 'strings', reducer });
  useInjectSaga({ key: 'strings', saga });

  useEffect(() => {
    onStart();
  }, []);

  const stringsListProps = {
    loading,
    error,
    strings,
  };

  return (
    <div>
      <StringsList {...stringsListProps} />
    </div>
  );
}

Strings.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onStart: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectStringsLoading(),
  error: makeSelectStringsError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onStart: () => dispatch(loadStrings()),
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
