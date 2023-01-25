import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    payload: index,
  };
}

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    payload: index,
  };
}

export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
