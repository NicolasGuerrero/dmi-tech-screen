/**
 *
 * Notifications
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Notifications({ adding, added, error }) {
  if (adding) {
    return <div>Adding...</div>;
  }
  if (added) {
    return <div>Successfuly added string.</div>;
  }
  if (error !== false) {
    return <div>Error: Please try again.</div>;
  }
  return null;
}

Notifications.propTypes = {
  adding: PropTypes.bool,
  added: PropTypes.bool,
  error: PropTypes.any,
};

export default Notifications;
