#!/usr/bin/node
import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return (
    List(page1).concat(List(page2))
  );
}

export function mergeElements(page1, page2) {
  return (
    Map(page1).merge(Map(page2))
  );
}

// console.log({
//   concat: concatElements([1, 2, 3], [4, 5, 6]),
//   merge: mergeElements({ firstName: 'Guillaume', lastName: 'Salva' }, { age: 23 }),
// });
