"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Option = _interopRequireDefault(require("@bootstrap-styled/v4/lib/Option"));

var _Input = _interopRequireDefault(require("@bootstrap-styled/v4/lib/Input"));

var _ToggleOption = _interopRequireDefault(require("./ToggleOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Toggle(props) {
  var Tag = props.tag,
      OptionTag = props.optionTag,
      defaultLabel = props.defaultLabel,
      className = props.className,
      onToggle = props.onToggle,
      value = props.value,
      values = props.values,
      messages = props.messages,
      rest = _objectWithoutProperties(props, ["tag", "optionTag", "defaultLabel", "className", "onToggle", "value", "values", "messages"]); // If we have items, render them


  var content = !values.length ? _react.default.createElement(_Option.default, null, defaultLabel) : values.map(function (v) {
    return _react.default.createElement(OptionTag, {
      key: v,
      value: v,
      message: messages[v]
    });
  });
  return _react.default.createElement(Tag, _extends({
    type: "select",
    name: "select",
    value: value,
    onChange: onToggle,
    className: className
  }, rest), content);
}

Toggle.defaultProps = {
  tag: _Input.default,
  optionTag: _ToggleOption.default,
  defaultLabel: '--',
  messages: {},
  value: '',
  values: [],
  onToggle: function onToggle() {}
};
/* eslint-disable react/require-default-props */

Toggle.propTypes = {
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.object, _propTypes.default.func]),

  /**
   * Replace the option component tag by the one specified. Can be:
   */
  optionTag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.object, _propTypes.default.func]),

  /**
   * Trigger when toggle
   */
  onToggle: _propTypes.default.func,

  /**
   * Label used by default when no selection
   */
  defaultLabel: _propTypes.default.string,

  /**
   * List of all possible values
   */
  values: _propTypes.default.array,

  /**
   * Current value
   */
  value: _propTypes.default.string,

  /** @ignore */
  className: _propTypes.default.string,

  /** react-intl messages (optional) */
  messages: _propTypes.default.object
};
/* eslint-enable react/require-default-props */

var _default = Toggle;
exports.default = _default;
module.exports = exports["default"];