import {
  GET_PERSON,
  GET_REPORT,
  GET_STUDENTS,
  GET_SUBJECTS,
  GET_TEACHERS,
} from "./actions-types";

const initialState = {
  students: [],
  teachers: [],
  subjects: [],
  person: {},
  report: [
    {
      id: 1,
      academicYear: "2014",
      rating: 2014,
      studentId: 9687,
      subjectId: 1,
      Subject: {
        id: 1,
        name: "programacion",
        Professor: {
          identification: 524,
          name: "John",
          lastName: "Doe",
        },
      },
      Student: {
        identification: 9687,
        name: "neider",
        lastName: "Doe",
      },
    },
  ],
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

    case GET_REPORT:
      return { ...state };

    default:
      return { ...state };
  }
}

export default rootReducer;
