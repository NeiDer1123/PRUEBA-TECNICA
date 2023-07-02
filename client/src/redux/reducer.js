import { GET_STUDENTS, GET_TEACHERS } from "./actions-types";

const initialState = {
  students: [],
  teachers: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state, students: action.payload };

    case GET_TEACHERS:
      return { ...state, teachers: action.payload };

    default:
      return { ...state };
  }
}
