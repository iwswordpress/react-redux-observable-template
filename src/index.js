import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import './styles.scss';

import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epic';
import FetchTweets from './FetchTweets';
import Items from './Items';
import LoadingStatus from './LoadingStatus';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const Application = () => {
  return (
    <div className="Application">
      <h1>Get data</h1>
      <LoadingStatus>
        <FetchTweets />
      </LoadingStatus>
      <Items />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
);
