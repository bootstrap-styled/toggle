/* eslint-disable function-paren-newline */
import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';
import Option from '@bootstrap-styled/v4/lib/Option';

import Toggle from '../index';

describe('<Toggle />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent';
    const defaultDeMessage = 'someOtherContent';
    const messages = defineMessages({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
      de: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultDeMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Toggle values={['en', 'de']} messages={messages} />
      </IntlProvider>
    );
    expect(renderedComponent.contains(<Toggle values={['en', 'de']} messages={messages} />)).toBe(true);
    expect(renderedComponent.find('option').length).toBe(0);
  });
  it('should not have ToggleOptions if props.values is not defined', () => {
    const renderedComponent = shallow(<Toggle />);
    expect(renderedComponent.contains(<Option>--</Option>)).toBe(true);
    console.log(renderedComponent.debug());
    expect(renderedComponent.find('Option').length).toBe(1);
  });
  it('should have ToggleOptions if props.values is defined', () => {
    const renderedComponent = shallow(<Toggle value="a" values={['a', 'b']} />);
    expect(renderedComponent.find('InjectIntl(ToggleOption)').length).toBe(2);
  });
});
