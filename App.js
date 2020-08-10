import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RootNavigator from './src/navigator/RootNavigator';
import rootReducer from './src/reducers/RootReducer';
import rootSaga from './src/sagas/RootSaga';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import TestWatchLocation from './src/screens/Test/TestWatchLocation'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
        {/* <TestWatchLocation/> */}
      </Provider>
    );
  }
};


