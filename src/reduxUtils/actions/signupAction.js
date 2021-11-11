import {
  signup
} from '../services/Signup';

import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './types';

export const signupAction = (data) => {
  console.log(data)
  console.log("actionManish3")
  return async (dispatch) => {
    console.log("actionManishDispatch")
    try {
      dispatch({ type: SIGNUP_LOADING });
      const res = await signup(data);
      console.log(res)
      console.log("actionManish1")
      if (res?.status === 200 || res?.status === 201) {
        console.log("actionManish")
        return dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
      } else {
      console.log("actionManisherror")
        return dispatch({ type: SIGNUP_ERROR });
      }
    } catch (err) {
      console.log("actionManisherror")
      dispatch({ type: SIGNUP_ERROR });
    }
  };
};
