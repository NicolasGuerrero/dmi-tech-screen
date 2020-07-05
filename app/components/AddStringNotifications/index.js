/**
 *
 * Notifications
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';

function AddStringNotifications({ adding, added, error }) {
  let color;
  if (adding) {
    return <div>Adding...</div>;
  }
  if (added) {
    color = 'green';
    return <Notification color={color}>Successfuly added string</Notification>;
  }
  if (error !== false) {
    color = 'red';
    return <Notification color={color}>Error: Please try again</Notification>;
  }
  return null;
}

AddStringNotifications.propTypes = {
  adding: PropTypes.bool,
  added: PropTypes.bool,
  error: PropTypes.any,
};

export default AddStringNotifications;
