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

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};

printBestStudents(grades);
