export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_FULFILLED = 'FETCH_ITEMS_FULFILLED';

export const fetchItems = () => ({ type: FETCH_ITEMS });

export const fetchItemsFulfilled = (payload) => ({
  type: FETCH_ITEMS_FULFILLED,
  // payload, OK if results:[{}]
  payload: payload.results, // for random user as it has thee arrays
});
