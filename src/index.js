import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import './styles.scss';

import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epic';
import FetchItems2 from './FetchItems2';
import Items from './Items';
import LoadingStatus from './LoadingStatus';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const Application = () => {
  return (
    <div className="Application">
      <h1>React-Redux-RxJS using cloud api</h1>
      <LoadingStatus>
        <FetchItems2 />
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
