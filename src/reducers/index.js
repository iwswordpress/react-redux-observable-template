import { combineReducers } from 'redux';
import { FETCH_ITEMS, FETCH_ITEMS_FULFILLED } from '../actions';

const items = (items = [], action) => {
  if (action.type === FETCH_ITEMS_FULFILLED) {
    return action.payload.tweets;
  }
  return items;
};

const status = (status = 'NOT_LOADED', action) => {
  if (action.type === FETCH_ITEMS) {
    return 'LOADING';
  }

  if (action.type === FETCH_ITEMS_FULFILLED) {
    return 'LOADED';
  }

  return status;
};

export default combineReducers({
  items,
  status,
});
