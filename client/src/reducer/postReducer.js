import * as Types from '../actions/Types'
const initialState = {
 posts:[],
  post: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.POST_LOADING:
      return {
        ...state,
        loading: true
      };
   
    case Types.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
      case Types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case Types.NEW_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case Types.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}
