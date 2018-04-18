You can use it with `react-intl`:

```js
const { defineMessages, IntlProvider } = require('react-intl');
const messages = defineMessages({
  fr: {
    id: 'language.fr',
    defaultMessage: 'French',
  },
  en: {
    id: 'language.en',
    defaultMessage: 'English',
  }
});
initialState = {
  value: 'en',  
};
<IntlProvider locales="en" messages={messages}>
  <Toggle 
    value={state.value}
    values={['fr', 'en']} 
    messages={messages}
    onToggle={(event) => setState({ value: event.target.value })} 
  />
</IntlProvider>
```

or without it:

```js
initialState = {
  value: 'en',  
};
<Toggle 
  value={state.value}
  values={['fr', 'en']} 
  onToggle={(event) => setState({ value: event.target.value })} 
/>
```

For example, this is how you can use it to create a `LocaleToggle` that work with **react-redux**:

```js static
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Toggle from 'bootstrap-styled-toggle';
import { changeLocale as changeLocaleAction } from './localeActions';
import messages from './messages';
import { appLocales } from './i18n';
import { selectLocale } from './selectors';

export class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { locale, onLocaleToggle, className } = this.props;
    return (
      <Toggle value={locale} values={appLocales} messages={messages} onToggle={onLocaleToggle} className={className} />
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
  className: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
});

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocaleAction(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
```
