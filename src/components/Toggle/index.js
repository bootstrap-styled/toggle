/**
*
* LocaleToggle
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Option from 'bootstrap-styled/lib/Option';
import Input from 'bootstrap-styled/lib/Input';
import ToggleOption from './ToggleOption';

function Toggle(props) {
  const { tag: Tag, optionTag: OptionTag } = props;
  let content = (<Option>--</Option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <OptionTag key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <Tag type="select" name="select" value={props.value} onChange={props.onToggle} className={props.className}>
      {content}
    </Tag>
  );
}

Toggle.defaultProps = {
  tag: Input,
  optionTag: ToggleOption,
  messages: {},
};

/* eslint-disable react/require-default-props */
Toggle.propTypes = {
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace the option component tag by the one specified. Can be:
   */
  optionTag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Trigger when toggle
   */
  onToggle: PropTypes.func,
  /**
   * List of all possible values
   */
  values: PropTypes.array,
  /**
   * Current value
   */
  value: PropTypes.string,
  /** @ignore */
  className: PropTypes.string,
  /** react-intl messages (optional) */
  messages: PropTypes.object,
};
/* eslint-enable react/require-default-props */

export default Toggle;
