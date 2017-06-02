import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import App from './App'

// Not really sure what this does but I know I need it for api calls. Something to do with redux and async requests
const middleware = [thunk];
middleware.push(createLogger());

// Creates a redux store with the reducers in the /reducers directory.
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Provider>
    )
  }
}

