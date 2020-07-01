/**
 *
 * StringsList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import Ul from './Ul';

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
        <Ul>
          {strings.map(string => (
            <li key={uuid()}>{string}</li>
          ))}
        </Ul>
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
