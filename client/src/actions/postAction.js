import * as Types from "./Types";
import axios from "axios";
///////////newpost
export const newpost = data => dispatch => {
dispatch(clearErrors())
  axios
    .post("/api/post/newpost", data)
    .then(res => dispatch({
      type:Types.NEW_POST,
      payload:res.data
    }))
    .catch(err =>
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data
      })
    )
}

///////////
///comment
export const commentpost = (id, data) => dispatch => {
  dispatch(clearErrors());

  axios
    .post(`/api/post/comment/${id}`, data)
    .then(res => dispatch(listpost()))
    .catch(err =>
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data
      })
    );
};
///like
export const likeandunlike = (id) => dispatch => {
  axios
    .post(`/api/post/likeandunlike/${id}`)
    .then(res => dispatch(listpost()))
    .catch(console.log);
};
/////////////////////list post
export const listpost = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/post/listpost")
    .then(res =>
      dispatch({
        type: Types.GET_POSTS,
        payload: res.data
      })
    )
    .catch(console.log);
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: Types.POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: Types.CLEAR_ERRORS
  };
};
////////deletepost
export const deletepost=id=>dispatch=>{

  axios
    .delete(`/api/post/deletepost/${id}`)
    .then(res =>dispatch(listpost()))
    .catch(console.log())

  
}
////////deletepost
export const getpostprofile=id=>dispatch=>{
    axios
      .get(`/api/post/getpostprofile/${id}`)
      .then(res => dispatch({
        type:Types.GET_POST,
        payload:res.data
      }))
      .catch(console.log())
  }
////////////
export const geteditpost=id=>dispatch=>{
 
  axios
    .get(`/api/post/geteditpost/${id}`)
    .then(res => dispatch({
      type:Types.GET_POSTS,
      payload:res.data
    }))
    .catch(console.log())
}
///comment
export const postedit = (id,data,history) => dispatch => {
  dispatch(clearErrors());

  axios
    .post(`/api/post/posteditpost/${id}`, data)
    .then(res => history.goBack())
    .catch(err =>
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data
      })
    );
};