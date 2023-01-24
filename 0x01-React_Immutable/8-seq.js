#!/usr/bin/node
import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const bestStudents = Seq(grades).filter((student) => student.score >= 70);
  console.log(bestStudents.map((student) => ({
    score: student.score,
    firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
    lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
  })).toJS());
}

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
};

printBestStudents(grades);
