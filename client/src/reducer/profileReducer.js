import * as Types from '../actions/Types';
const initialState={
    profile:[],
 loading:false
}
export default (state=initialState,action)=>{
    switch (action.type) {
    
        case Types.GET_USER:
            
           return {
               ...state,
               profile:action.payload,
                loading:false
           }
           case Types.DELETE_USER:           
           return {
             ...state,
             profile:state.profile.filter((profile)=>profile._id!==action.payload)
           };
           case Types.PROFILE_LOADING:
           return {
             ...state,
             loading: true
           };
        default:
            return state;
    }
}