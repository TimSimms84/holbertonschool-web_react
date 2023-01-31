import { 
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { Map, merge } from 'immutable';
import {coursesNormalizer } from '../schema/courses'


export const initialState = Map({});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // return state.merge(coursesNormalizer(action.data).map(course => ({...course, isSelected: false})));
      return state.merge(Object.values(coursesNormalizer(action.data)).map(course => ({...course, isSelected: false})));

    case SELECT_COURSE:
      return state.map(course => {
        if (course.id === action.courseId) return {...course, isSelected: true};
        return course;
      });
    case UNSELECT_COURSE:
      return state.map(course => {
        if (course.id === action.courseId) return {...course, isSelected: false};
        return course;
      });
    default:
      return state;
  };
};


export default courseReducer;
