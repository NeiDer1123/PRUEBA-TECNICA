import { GET_STUDENTS } from "./actions-types"
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

export {
    getStudets
}