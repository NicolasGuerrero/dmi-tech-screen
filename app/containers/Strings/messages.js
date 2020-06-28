/*
 * Strings Messages
 *
 * This contains all the text for the Strings container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Strings';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Strings container!',
  },
});
