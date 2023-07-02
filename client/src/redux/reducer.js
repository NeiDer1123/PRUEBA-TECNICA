import { GET_STUDENTS, GET_SUBJECTS, GET_TEACHERS } from "./actions-types";

const initialState = {
  students: [],
  teachers: [],
  subjects: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state, students: action.payload };

    case GET_TEACHERS:
      return { ...state, teachers: action.payload };

    case GET_SUBJECTS:
      return {...state, subjects: action.payload }

    default:
      return { ...state };
  }
}
