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
  const {
    tag: Tag,
    optionTag: OptionTag,
    defaultLabel,
    className,
    onToggle,
    value,
    values,
    messages,
    ...rest
  } = props;
  // If we have items, render them
  const content = !values.length ? <Option>{defaultLabel}</Option> : values.map((v) => (
    <OptionTag key={v} value={v} message={messages[v]} />
  ));
  return (
    <Tag
      type="select"
      name="select"
      value={value}
      onChange={onToggle}
      className={className}
      {...rest}
    >
      {content}
    </Tag>
  );
}

Toggle.defaultProps = {
  tag: Input,
  optionTag: ToggleOption,
  defaultLabel: '--',
  messages: {},
  value: '',
  values: [],
  onToggle: () => {},
};

/* eslint-disable react/require-default-props */
Toggle.propTypes = {
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]),
  /**
   * Replace the option component tag by the one specified. Can be:
   */
  optionTag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]),
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
