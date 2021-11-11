import {
  getAllProduct,
  addProduct,
  updateProduct
} from '../services/Product';

import {
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,

  GET_ALL_PRODUCT_LOADING,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_ERROR,

  UPDATE_PRODUCT_LOADING,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR
} from './types';

export const addProductAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_PRODUCT_LOADING });
      const res = await addProduct(data);
      
      if (res?.status === 200 || res?.status === 201) {
        return dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } else {
        return dispatch({ type: ADD_PRODUCT_ERROR });
      }
    } catch (err) {
      dispatch({ type: ADD_PRODUCT_ERROR });
    }
  };
};

export const getAllProductAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_PRODUCT_LOADING });
      const res = await getAllProduct();

      if (res?.status === 200 || res?.status === 201) {
        return dispatch({
          type: GET_ALL_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } else {
        return dispatch({
          type: GET_ALL_PRODUCT_ERROR,
        });
      }
    } catch (err) {
      dispatch({ type: GET_ALL_PRODUCT_ERROR});
    }
  };
};

export const updateProductAction = (id,data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PRODUCT_LOADING });
      const res = await updateProduct(id,data);

      if (res?.status === 200 || res?.status === 201) {
        return dispatch({
          type: UPDATE_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } else {
        return dispatch({
          type: UPDATE_PRODUCT_ERROR,
        });
      }
    } catch (err) {
      dispatch({ type: UPDATE_PRODUCT_ERROR });
    }
  };
};
