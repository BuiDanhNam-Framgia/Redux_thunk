/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import SearchViewContainer from './src/container/SearchViewContainer';
import store from './src/store/Store'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <SearchViewContainer />
      </Provider>
    );
  }
}

