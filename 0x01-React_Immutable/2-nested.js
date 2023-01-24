#!/usr/bin/node

// eslint-disable-next-line no-unused-vars
import Immutable from 'immutable';

export default function accessImmutableObject(obj, array) {
  const myMap = Immutable.fromJS(obj);
  return (
    myMap.getIn(array)
  );
}

// console.log(accessImmutableObject({
//   name: {
//     first: 'Guillaume',
//     last: 'Salva',
//   },
// }, ['name', 'first']));
