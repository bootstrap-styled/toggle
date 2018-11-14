/**
*
* LocaleToggle
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Option from '@bootstrap-styled/v4/lib/Option';
import Input from '@bootstrap-styled/v4/lib/Input';
import ToggleOption from './ToggleOption';

function Toggle(props) {
  const { tag: Tag, optionTag: OptionTag, defaultLabel } = props;
  let content = (<Option>{defaultLabel}</Option>);

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
  defaultLabel: '--',
  messages: {},
};

/* eslint-disable react/require-default-props */
Toggle.propTypes = {
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.any,
  /**
   * Replace the option component tag by the one specified. Can be:
   */
  optionTag: PropTypes.any,
  /**
   * Trigger when toggle
   */
  onToggle: PropTypes.func,
  /**
   * Label used by default when no selection
   */
  defaultLabel: PropTypes.string,
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
