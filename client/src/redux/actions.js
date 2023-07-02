import { GET_STUDENTS, GET_TEACHERS } from "./actions-types"
import axios from "axios"

const getStudets = () => {
    return async function (dispatch){
        const apiData = await axios.get("http://localhost:3001/student")
        const students = apiData.data
        console.log(students)
        dispatch({
            type: GET_STUDENTS,
            payload: students
        })
    }
}

const getTeachers = () => {
    return async function (dispatch){
        const apiData = await axios.get("http://localhost:3001/professor")
        const teachers = apiData.data
        console.log(teachers)
        dispatch({
            type: GET_TEACHERS,
            payload: teachers
        })
    }
}

export {
    getStudets,
    getTeachers
}