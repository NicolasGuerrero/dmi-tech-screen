/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.strings} />
        </HeaderLink>
        <HeaderLink to="/add">
          <FormattedMessage {...messages.add} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

Header.propTypes = {};

export default Header;
