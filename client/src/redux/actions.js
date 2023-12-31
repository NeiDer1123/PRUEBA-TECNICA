import { sortReportByAcademicYear } from "../helpers/funtions";
import {
  GET_STUDENTS,
  GET_TEACHERS,
  GET_SUBJECTS,
  GET_PERSON,
  GET_REPORT,
  GET_SUBJECT,
  GET_RATING,
} from "./actions-types";
import axios from "axios";

const getStudets = () => {
  return async function (dispatch) {
    const response = await axios.get("/student");
    const students = response.data;
    dispatch({
      type: GET_STUDENTS,
      payload: students,
    });
  };
};

const getTeachers = () => {
  return async function (dispatch) {
    const response = await axios.get("/professor");
    const teachers = response.data;
    dispatch({
      type: GET_TEACHERS,
      payload: teachers,
    });
  };
};

const getSubjects = () => {
  return async function (dispatch) {
    const response = await axios.get("/subject");
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
      const response = await axios.get(`/student/${id}`);
      const student = response.data;
      dispatch({
        type: GET_PERSON,
        payload: student,
      });
    } else {
      const response = await axios.get(`/professor/${id}`);
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
    const response = await axios.get(`/subject/${id}`);
    const subject = response.data;
    dispatch({
      type: GET_SUBJECT,
      payload: subject,
    });
  };
};

const getRatingsOfStudent = (id) => {
  return async function (dispatch) {
    const response = await axios.get(
      `/student/${id}/ratings`
    );
    const rating = response.data;
    dispatch({
      type: GET_RATING,
      payload: rating,
    });
  };
};

const getReport = () => {
  return async function (dispatch) {
    const response = await axios.get("/rating/report");
    const report = response.data;
    const reportOrdered = sortReportByAcademicYear(report)
    dispatch({
      type: GET_REPORT,
      payload: reportOrdered,
    });
  };
};

export {
  getStudets,
  getTeachers,
  getSubjects,
  getPerson,
  getReport,
  getSubject,
  getRatingsOfStudent,
};
