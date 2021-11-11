import { combineReducers } from 'redux';
import productReducer from './productReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  productReducer: productReducer,
  loginReducer: loginReducer,
  signupReducer:signupReducer
});