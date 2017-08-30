
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import AppWithNavigationState from './navigators/AppNavigator';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    return (
      this.state.isLoading
      ?
      null
      :
      <Provider store={this.state.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
