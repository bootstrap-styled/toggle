"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Option = _interopRequireDefault(require("@bootstrap-styled/v4/lib/Option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var injectIntl;
var intlShape; // this make react-intl optional to our component and our module

try {
  var _require = require('react-intl'),
      injectIntlDefault = _require.injectIntl,
      intlShapeDefault = _require.intlShape; // eslint-disable-line


  injectIntl = injectIntlDefault; // eslint-disable-line

  intlShape = intlShapeDefault; // eslint-disable-line
} catch (er) {
  injectIntl = null;
  intlShape = null;
}
/**
 * This component is automatically used when using `<Toggle />`
 * If you need a different option tag, instead just pass the prop `optionTag` to the `<Toggle />` component.
 */


var ToggleOption = function ToggleOption(_ref) {
  var Tag = _ref.tag,
      value = _ref.value,
      message = _ref.message,
      intl = _ref.intl,
      rest = _objectWithoutProperties(_ref, ["tag", "value", "message", "intl"]);

  return _react.default.createElement(Tag, _extends({
    value: value
  }, rest), message && intl ? intl.formatMessage(message) : value);
};

ToggleOption.defaultProps = {
  tag: _Option.default
};
/* eslint-disable react/require-default-props */

ToggleOption.propTypes = {
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The value
   */
  value: _propTypes.default.string.isRequired,

  /**
   * react-intl messages (optional)
   */
  message: _propTypes.default.object
};
var exported = ToggleOption; // eslint-disable-line import/no-mutable-exports

if (intlShape) {
  /** @ignore */
  ToggleOption.propTypes.intl = intlShape.isRequired;
  exported = injectIntl(ToggleOption);
}

var _default = exported;
exports.default = _default;
module.exports = exports["default"];