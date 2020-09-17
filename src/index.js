import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import './styles.scss';

import { createEpicMiddleware } from 'redux-observable';

import { fetchItemsEpic2 } from './epic2';
import FetchItems2 from './FetchItems2';

import Items2 from './Items2';
import LoadingStatus from './LoadingStatus';

const epicMiddleware = createEpicMiddleware();
//const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware),
    // other store enhancers if any
  ),
);
epicMiddleware.run(fetchItemsEpic2);

const Application = () => {
  return (
    <div className="Application">
      <h1>React-Redux-RxJS using cloud api</h1>
      <LoadingStatus>
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
