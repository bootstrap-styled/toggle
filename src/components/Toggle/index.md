### Usage without `react-inl`

You will need to install without the optional dependencies.

```bash
$ npm install $PACAKAGE_NAME --no-optional
``` 
 
Test to see if everything works. 

```bash
$ npm list
```

Make sure you have no errors.

```bash
$ npm shrinkwrap
```

That will lock down the dependencies for the packages. 

That way npm install will look into npm-shrinkwrap.json before trying to install dependencies.

You can read more about it here [https://docs.npmjs.com/cli/shrinkwrap][1]


  [1]: https://docs.npmjs.com/cli/shrinkwrap


This is how you use it:

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

### Usage with `react-intl`

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
