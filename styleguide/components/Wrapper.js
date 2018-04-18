import React, { Component } from 'react';
import Provider from 'react-redux/lib/components/Provider';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, compose } from 'redux';
import { IntlProvider } from 'react-intl';
import { translation } from '../../package.json';
// import reducer from '../../src/components/reducer';

export default class Wrapper extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    store: null,
  }

  /* eslint-disable no-underscore-dangle, function-paren-newline */
  componentWillMount() {
    const middleware = [];
    const composeEnhancers =
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

    const enhancer = composeEnhancers(applyMiddleware(...middleware),
      // other store enhancers if any
    );

    const store = createStore(() => {}, enhancer);
    this.setState({
      store,
    });
  }
  /* eslint-enable no-underscore-dangle, function-paren-newline */

  render() {
    return (
      <Provider store={this.state.store}>
        <IntlProvider locale={translation.locale}>
          {this.props.children}
        </IntlProvider>
      </Provider>
    );
  }
}

