export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_TWEETS_FULFILLED = 'FETCH_TWEETS_FULFILLED';

export const fetchItems = () => ({ type: FETCH_ITEMS });

export const fetchItemsFulfilled = (payload) => ({
  type: FETCH_TWEETS_FULFILLED,
  payload,
});
