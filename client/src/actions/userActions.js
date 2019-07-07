import axios from 'axios'
import * as Types from './Types';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const signin = (data,history)=>dispatch => {
  
   dispatch(clearerrors())
        axios
            .post('/api/user/signin', data)
            .then(res => history.push('/Login')) 
            .catch(err=>dispatch({
                type:Types.GET_ERRORS,
                payload:err.response.data
            }))
    
}

export const login = (data) => dispatch => {
  dispatch(clearerrors())
    axios
      .post("/api/user/login", data)
      .then(res => {
        // Save to localStorage
  // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  export const setCurrentUser = decoded => {
    return {
      type: Types.SET_CURRENT_USER,
      payload: decoded
    };
  };

  export const clearerrors=()=>{
    return {
        type:Types.CLEAR_ERRORS
    }
}
  export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };