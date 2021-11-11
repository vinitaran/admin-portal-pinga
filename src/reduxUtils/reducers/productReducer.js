import * as types from "../actions/types";
const initialState = [];

export default function addProductReducer(state = initialState,action) 
{
  switch (action.type) {
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        requestData: action.payload.Data,
        type: action.type,
      };
    case types.ADD_PRODUCT_LOADING:
      return {
        ...state,
        type: action.type,
      };
    case types.ADD_PRODUCT_ERROR:
      return {
        ...state,
        type: action.type,
      };

    default:
      return state;
  }
}
