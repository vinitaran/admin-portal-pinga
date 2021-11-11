import * as types from "../actions/types";
const initialState = [];

export default function loginReducer(state = initialState,action) 
{
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        requestData: action.payload.Data,
        type: action.type,
      };
    case types.LOGIN_LOADING:
      return {
        ...state,
        type: action.type,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        type: action.type,
      };

    default:
      return state;
  }
}
