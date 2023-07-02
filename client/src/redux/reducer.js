import { GET_EXAMPLE } from "./actions-types";

const initialState = {
  example: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EXAMPLE:
      return { ...state, example: action.payload };

    default:
      return { ...state };
  }
}
