import { GET_EXAMPLE } from "./actions-types"
import axios from "axios"

const getExample = () => {
    return async function (dispatch){
        const apiData = await axios.get("http://localhost:3001/professor")
        const example = apiData.data
        console.log(example)
        dispatch({
            type: GET_EXAMPLE,
            payload: example
        })
    }
}

export {
    getExample
}