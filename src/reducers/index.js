import { combineReducers } from 'redux';
import { FETCH_ITEMS, FETCH_ITEMS_FULFILLED } from '../actions';

const items = (items = [], action) => {
  if (action.type === FETCH_ITEMS_FULFILLED) {
    console.log('This needs to be of type array');
    console.log('[reducer] ', action.payload.items);
    return action.payload.items;
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
