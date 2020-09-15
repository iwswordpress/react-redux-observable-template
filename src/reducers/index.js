import { combineReducers } from 'redux';
import { FETCH_TWEETS, FETCH_TWEETS_FULFILLED } from '../actions';

const items = (items = [], action) => {
  if (action.type === FETCH_TWEETS_FULFILLED) {
    return action.payload.tweets;
  }
  return items;
};

const status = (status = 'NOT_LOADED', action) => {
  if (action.type === FETCH_TWEETS) {
    return 'LOADING';
  }

  if (action.type === FETCH_TWEETS_FULFILLED) {
    return 'LOADED';
  }

  return status;
};

export default combineReducers({
  items,
  status,
});
