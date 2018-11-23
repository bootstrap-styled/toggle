"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactIntl = require("react-intl");

var _Option = _interopRequireDefault(require("@bootstrap-styled/v4/lib/Option"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable function-paren-newline */
describe('<Toggle />', function () {
  it('should contain default text', function () {
    var defaultEnMessage = 'someContent';
    var defaultDeMessage = 'someOtherContent';
    var messages = (0, _reactIntl.defineMessages)({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage
      },
      de: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultDeMessage
      }
    });
    var renderedComponent = (0, _enzyme.shallow)(_react.default.createElement(_reactIntl.IntlProvider, {
      locale: "en"
    }, _react.default.createElement(_index.default, {
      values: ['en', 'de'],
      messages: messages
    })));
    expect(renderedComponent.contains(_react.default.createElement(_index.default, {
      values: ['en', 'de'],
      messages: messages
    }))).toBe(true);
    expect(renderedComponent.find('option').length).toBe(0);
  });
  it('should not have ToggleOptions if props.values is not defined', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react.default.createElement(_index.default, null));
    expect(renderedComponent.contains(_react.default.createElement(_Option.default, null, "--"))).toBe(true);
    expect(renderedComponent.find('Option').length).toBe(1);
  });
  it('should have ToggleOptions if props.values is defined', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react.default.createElement(_index.default, {
      value: "a",
      values: ['a', 'b']
    }));
    expect(renderedComponent.find('InjectIntl(ToggleOption)').length).toBe(2);
  });
});