/**
*
* ToggleOption
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Option from 'bootstrap-styled/lib/Option';

let injectIntl;
let intlShape;

// this make react-intl optional to our component and our module
try {
  const reactIntl = require('react-intl'); // eslint-disable-line
  injectIntl = reactIntl.injectIntl; // eslint-disable-line
  intlShape = reactIntl.intlShape; // eslint-disable-line
} catch (er) {
  injectIntl = null;
  intlShape = null;
}

/**
 * This component is automatically used when using `<Toggle />`
 * If you need a different option tag, instead just pass the prop `optionTag` to the `<Toggle />` component.
 */
const ToggleOption = ({
  tag: Tag,
  value,
  message,
  intl,
}) => (
  <Tag value={value}>
    {message && intl ? intl.formatMessage(message) : value}
  </Tag>
);

ToggleOption.defaultProps = {
  tag: Option,
};

/* eslint-disable react/require-default-props */
ToggleOption.propTypes = {
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * The value
   */
  value: PropTypes.string.isRequired,
  /**
   * react-intl messages (optional)
   */
  message: PropTypes.object,
};

let exported = ToggleOption; // eslint-disable-line import/no-mutable-exports

if (intlShape) {
  /** @ignore */
  ToggleOption.propTypes.intl = intlShape.isRequired;
  exported = injectIntl(ToggleOption);
}

export default exported;
