import { GET_STUDENTS, GET_TEACHERS, GET_SUBJECTS, GET_PERSON } from "./actions-types";
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

const getPerson = (id, location) => {
  return async function (dispatch) {
    if (location === "/student") {
      const apiData = await axios.get(`http://localhost:3001/student/${id}`);
      const student = apiData.data;
      console.log(student)
      dispatch({
        type: GET_PERSON,
        payload: student,
      });
    } else {
      const apiData = await axios.get(`http://localhost:3001/professor/${id}`);
      const professor = apiData.data;
      dispatch({
        type: GET_PERSON,
        payload: professor,
      });
    }
  };
};

export { getStudets, getTeachers, getSubjects, getPerson };
