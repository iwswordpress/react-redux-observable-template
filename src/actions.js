export const FETCH_ITEMS2 = 'FETCH_ITEMS2';
export const FETCH_ITEMS2_FULFILLED = 'FETCH_ITEMS_FULFILLED';

export const fetchItems = () => ({ type: FETCH_ITEMS2 });

export const fetchItemsFulfilled = (payload) => ({
  type: FETCH_ITEMS2_FULFILLED,
  // payload, OK if results:[{}]
  payload: payload.results, // for random user as it has thee arrays
});
