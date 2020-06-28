/**
 *
 * StringsList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function StringsList({ loading, error, strings }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error !== false) {
    return <div>Error...</div>;
  }
  if (strings !== false) {
    return (
      <div>
        <ul>
          {strings.map(string => (
            <li>{string}</li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

StringsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  strings: PropTypes.any,
};

export default StringsList;
