/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  strings: {
    id: `${scope}.strings`,
    defaultMessage: 'View Strings',
  },
  add: {
    id: `${scope}.add`,
    defaultMessage: 'Add A String',
  },
});
