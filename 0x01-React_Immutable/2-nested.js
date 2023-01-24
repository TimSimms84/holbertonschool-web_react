#!/usr/bin/node

import { getIn } from 'immutable';

export default function accessImmutableObject(obj, path) {
  return (
    getIn(obj, path)
  );
}

// console.log(accessImmutableObject({
//   name: {
//     first: 'Guillaume',
//     last: 'Salva',
//   },
// }, ['name', 'first']));
