import { GET_STUDENTS } from "./actions-types";

const initialState = {
  students: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state, students: action.payload };

    default:
      return { ...state };
  }
}
