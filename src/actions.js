export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_FULFILLED = 'FETCH_ITEMS_FULFILLED';

export const fetchItems = () => ({ type: FETCH_ITEMS });

export const fetchItemsFulfilled = (payload) => ({
  type: FETCH_ITEMS_FULFILLED,
  payload,
});
