import { add } from './helpers';
import { fromFetch } from 'rxjs/fetch';
import { of, pipe, from } from 'rxjs';
import { switchMap, mergeMap, concatMap, delay, retry } from 'rxjs/operators';

// custom operators

function getJSON() {
  return switchMap((response) => response.json());
}

function emitEach(d) {
  return pipe(
    mergeMap((response) => of(...response)),
    concatMap((response) => {
      return of(response).pipe(delay(d));
    }),
  );
}

const users = fromFetch('https://jsonplaceholder.typicode.com/users'); // one observable

users
  //we switch and this creates another observable inside an observable so we use Map to flatten it
  .pipe(getJSON(), emitEach(2000))

  .subscribe((user) => {
    console.log(user);
    add.li(`${user.id} ${user.name}`);
  });
