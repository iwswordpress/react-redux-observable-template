import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { FETCH_ITEMS2, fetchItems2Fulfilled } from './actions';
const url0 = 'https://tweet-stream.glitch.me/api/tweets';
const url1 = 'https://49plus.co.uk/wp-social/wp-json/wordcamp/v2/items/wa';
const url2 = 'https://randomuser.me/api/?nat=gb&results=20';

export const fetchItemsEpic2 = (action$) =>
  action$.pipe(
    ofType(FETCH_ITEMS2),
    mergeMap((action) =>
      ajax
        .getJSON(url2)

        .pipe(
          tap((data) => console.log('[EPIC TAP1]', data)),
          map((response) => fetchItems2Fulfilled(response)),
          tap((data) => console.log('[EPIC TAP2 of type items:Array]', data)),
        ),
    ),
  );

export const fetchItemsEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_ITEMS2),
    mergeMap((action) =>
      ajax
        .getJSON(url2)

        .pipe(
          tap((data) => console.log('[EPIC TAP1]', data)),
          map((response) => fetchItems2Fulfilled(response)),
          tap((data) => console.log('[EPIC TAP2 of type items:Array]', data)),
        ),
    ),
  );
