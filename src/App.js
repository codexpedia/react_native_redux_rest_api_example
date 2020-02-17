import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import GitAccount from './GitAccount';
import { accountReducer, initialState } from './reducer';

console.log(`${Date()} 1111111111>>> initialization of Redux for the application.`);
const rootReducer = accountReducer;
const middlewares = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default class App extends Component {
  render() {
    console.log(`${Date()} 2222222222>>> Provider is a wrapper to the application and responsible for providing access to the created store`);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <GitAccount />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
