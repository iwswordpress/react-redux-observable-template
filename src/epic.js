import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap, tap } from 'rxjs/operators';
import { FETCH_ITEMS, fetchItemsFulfilled } from './actions';
const url0 = 'https://tweet-stream.glitch.me/api/tweets';
const url1 = 'https://49plus.co.uk/wp-social/wp-json/wordcamp/v2/items/wa';
const fetchItemsEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_ITEMS),
    mergeMap((action) =>
      ajax
        .getJSON(url1)

        .pipe(
          tap((data) => console.log('[EPIC TAP1]', data)),
          map((response) => fetchItemsFulfilled(response)),
          tap((data) => console.log('[EPIC TAP2 of type items:Array]', data)),
        ),
    ),
  );

export default fetchItemsEpic;
