"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactIntl = require("react-intl");

var _ToggleOption = _interopRequireDefault(require("../ToggleOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable function-paren-newline */
describe('<ToggleOption />', function () {
  it('should render default language messages', function () {
    var defaultEnMessage = 'someContent';
    var message = (0, _reactIntl.defineMessages)({
      enMessage: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage
      }
    });
    var renderedComponent = (0, _enzyme.shallow)(_react.default.createElement(_reactIntl.IntlProvider, {
      locale: "en"
    }, _react.default.createElement(_ToggleOption.default, {
      value: "en",
      message: message.enMessage
    })));
    expect(renderedComponent.contains(_react.default.createElement(_ToggleOption.default, {
      value: "en",
      message: message.enMessage
    }))).toBe(true);
  });
  it('should display `value`(two letter language code) when `message` is absent', function () {
    var renderedComponent = (0, _enzyme.mount)(_react.default.createElement(_reactIntl.IntlProvider, {
      locale: "de"
    }, _react.default.createElement(_ToggleOption.default, {
      value: "de"
    })));
    expect(renderedComponent.text()).toBe('de');
  });
});