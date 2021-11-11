import * as types from "../actions/types";
const initialState = [];

export default function signupReducer(state = initialState,action) 
{
  console.log(action)
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_SUCCESS:
      return [...state, payload];
    case types.SIGNUP_LOADING:
      return {
        ...state,
        type: action.type,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        type: action.type,
      };

    default:
      return state;
  }
}
