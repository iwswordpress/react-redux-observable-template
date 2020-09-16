import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import './styles.scss';

import { createEpicMiddleware } from 'redux-observable';

import { fetchItemsEpic2, fetchItemsEpic } from './epic';
import FetchItems2 from './FetchItems2';
import FetchItems from './FetchItems';
import Items2 from './Items2';
import LoadingStatus from './LoadingStatus';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(fetchItemsEpic2, fetchItemsEpic);

const Application = () => {
  return (
    <div className="Application">
      <h1>React-Redux-RxJS using cloud api</h1>
      <LoadingStatus>
        <FetchItems />
        <FetchItems2 />
      </LoadingStatus>
      <Items2 />
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
