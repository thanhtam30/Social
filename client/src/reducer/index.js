import { combineReducers } from 'redux';
import user from './userReducer';
import errors from './errorsReducer';
import post from './postReducer'
import profile from './profileReducer';
export default combineReducers({
 user,errors,post,profile

});
