import { GET_STUDENTS, GET_TEACHERS, GET_SUBJECTS } from "./actions-types";
import axios from "axios";

const getStudets = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/student");
    const students = apiData.data;
    dispatch({
      type: GET_STUDENTS,
      payload: students,
    });
  };
};

const getTeachers = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/professor");
    const teachers = apiData.data;
    dispatch({
      type: GET_TEACHERS,
      payload: teachers,
    });
  };
};

const getSubjects = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/subject");
    const subjects = apiData.data;
    dispatch({
      type: GET_SUBJECTS,
      payload: subjects,
    });
  };
};


export { getStudets, getTeachers, getSubjects };
