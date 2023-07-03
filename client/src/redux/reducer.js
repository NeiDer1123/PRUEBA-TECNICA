import {
  GET_PERSON,
  GET_STUDENTS,
  GET_SUBJECTS,
  GET_TEACHERS,
} from "./actions-types";

const initialState = {
  students: [],
  teachers: [],
  subjects: [],
  person: {}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state, students: action.payload };

    case GET_TEACHERS:
      return { ...state, teachers: action.payload };

    case GET_SUBJECTS:
      return { ...state, subjects: action.payload };

    case GET_PERSON:
      return { ...state, person: action.payload };

    default:
      return { ...state };
  }
}
