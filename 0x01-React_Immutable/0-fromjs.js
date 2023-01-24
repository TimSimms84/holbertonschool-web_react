#!/usr/bin/node

import { fromJS } from 'immutable';

export default function getImmutableObject(obj) {
  return (
    fromJS(obj)
  );
}

console.log(getImmutableObject({
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}));
