import { GET_STUDENTS, GET_TEACHERS, GET_SUBJECTS, GET_PERSON, GET_REPORT, GET_SUBJECT } from "./actions-types";
import axios from "axios";

const getStudets = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/student");
    const students = response.data;
    dispatch({
      type: GET_STUDENTS,
      payload: students,
    });
  };
};

const getTeachers = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/professor");
    const teachers = response.data;
    dispatch({
      type: GET_TEACHERS,
      payload: teachers,
    });
  };
};

const getSubjects = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/subject");
    const subjects = response.data;
    dispatch({
      type: GET_SUBJECTS,
      payload: subjects,
    });
  };
};

const getPerson = (id, location) => {
  return async function (dispatch) {
    if (location === "/student") {
      const response = await axios.get(`http://localhost:3001/student/${id}`);
      const student = response.data;
      console.log(student)
      dispatch({
        type: GET_PERSON,
        payload: student,
      });
    } else {
      const response = await axios.get(`http://localhost:3001/professor/${id}`);
      const professor = response.data;
      dispatch({
        type: GET_PERSON,
        payload: professor,
      });
    }
  };
};

const getSubject = (id) => {
  return async function (dispatch) {
      const response = await axios.get(`http://localhost:3001/subject/${id}`);
      const student = response.data;
      console.log(student)
      dispatch({
        type: GET_SUBJECT,
        payload: student,
      });
  };
};

const getReport = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/rating/report");
    const report = response.data;
    dispatch({
      type: GET_REPORT,
      payload: report,
    });
  };
};

export { getStudets, getTeachers, getSubjects, getPerson, getReport, getSubject };
