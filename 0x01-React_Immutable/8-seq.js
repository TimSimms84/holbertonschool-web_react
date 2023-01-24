#!/usr/bin/node
import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const mySeq = Seq(grades);
  return (
    mySeq.filter((student) => student.score >= 70)
      .map((student) => `${student.firstName.charAt(0).toUpperCase()}${student.firstName.slice(1)} ${student.lastName.charAt(0).toUpperCase()}${student.lastName.slice(1)}`)
      .join(', ')
  );
}

// const grades = {
//   1: {
//     score: 99,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   },
// };

// console.log(printBestStudents(grades));
