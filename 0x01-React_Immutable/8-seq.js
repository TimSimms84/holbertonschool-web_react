#!/usr/bin/node
import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const bestStudents = Seq(grades).filter((student) => student.score >= 70);
  console.log(bestStudents.map((student) => ({
    score: student.score,
    firstName: student.firstName,
    lastName: student.lastName,
  })).toJS());
}

const grades = [
  { score: 83, firstName: 'Guillaume', lastName: 'Salva' },
  { score: 61, firstName: 'James', lastName: 'Bond' },
];

printBestStudents(grades);
