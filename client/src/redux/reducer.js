import {
  GET_PERSON,
  GET_RATING,
  GET_REPORT,
  GET_STUDENTS,
  GET_SUBJECT,
  GET_SUBJECTS,
  GET_TEACHERS,
} from "./actions-types";

const initialState = {
  students: [],
  teachers: [],
  subjects: [],
  person: {},
  subject: {},
  ratings: [],
  report: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state, students: action.payload };

    case GET_TEACHERS:
      return { ...state, teachers: action.payload };

    case GET_SUBJECTS:
      return { ...state, subjects: action.payload };

    case GET_PERSON:
      return { ...state, person: action.payload };

    case GET_SUBJECT:
      return { ...state, subject: action.payload}

    case GET_REPORT:
      return { ...state, report: action.payload };

    case GET_RATING:
      return {...state, ratings: action.payload}

    default:
      return { ...state };
  }
}

export default rootReducer;
