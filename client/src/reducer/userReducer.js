import * as Types from '../actions/Types';
import _ from 'lodash';

const initialState = {
    user: {},
    isAuthenticated: false
   
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_CURRENT_USER:
          return {
            ...state,
            isAuthenticated: !_.isEmpty(action.payload),
            user: action.payload
          };
        default:
          return state;
      }
}

export default userReducer;