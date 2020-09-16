import { combineReducers } from 'redux';
import { FETCH_ITEMS2, FETCH_ITEMS2_FULFILLED } from '../actions';

const items2 = (items2 = [], action) => {
  if (action.type === FETCH_ITEMS2_FULFILLED) {
    console.log('This needs to be of type array');
    console.log('[reducer] ', action.payload.results); // needs right array
    return action.payload;
  }
  return items2;
};

const status = (status = 'NOT_LOADED', action) => {
  if (action.type === FETCH_ITEMS2) {
    return 'LOADING';
  }

  if (action.type === FETCH_ITEMS2_FULFILLED) {
    return 'LOADED';
  }

  return status;
};

export default combineReducers({
  items2,
  status,
});
