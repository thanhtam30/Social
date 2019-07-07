import * as Types from '../actions/Types'
const initialState={};
export default (state=initialState,action)=>{
switch (action.type) {
    case Types.GET_ERRORS:
        
      return action.payload;
      case Types.CLEAR_ERRORS:
      return {};
    default:
      return {...state}
}
}