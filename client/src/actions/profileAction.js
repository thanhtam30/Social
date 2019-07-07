import * as Types from './Types';
import axios from 'axios';
////////
export const getAlluser=()=>dispatch=>{
    axios.get('/api/user/alluser')
    .then(res=>dispatch({
        type:Types.GET_USER,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:Types.GET_USER,
        payload:null
    }))
}
///////
//////// updateimage
export const updateImageUser=(id,newImage,history)=>dispatch=>{
    axios.post(`/api/user/updateimageuser/${id}`,newImage)
    .then(res=>history.goBack()
    )
    .catch(err=>dispatch({
        type:Types.GET_USER,
        payload:null
    }))
}
//////// updateimage
export const updateUser=(id,newUser,history)=>dispatch=>{
    axios.post(`/api/user/updateuser/${id}`,newUser)
    .then(res=>history.goBack()
    )
    .catch(err=>dispatch({
        type:Types.GET_USER,
        payload:null
    }))
}
///
export const deleteUser=(id)=>dispatch=>{
    axios.delete(`/api/user/deleteuser/${id}`)
    .then(res=>dispatch({
        type:Types.GET_USER,
        payload:{}
    }))
    .catch(err=>dispatch({
        type:Types.GET_USER,
        payload:null
    }))
}
///////////
export const previewUser=(id)=>dispatch=>{
    dispatch(setProfileLoading());
    axios.get(`/api/user/previewuser/${id}`)
    .then(res=>dispatch({
        type:Types.GET_USER,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:Types.GET_USER,
        payload:null
    }))
}
//////////
// Profile loading
export const setProfileLoading = () => {
    return {
      type: Types.PROFILE_LOADING
    };
  };