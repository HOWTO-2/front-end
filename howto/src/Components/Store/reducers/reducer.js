    import { 
      POST_USER, 
      FETCH_HOWTO_START,
      FETCH_HOWTO_SUCCESS,
      FETCH_HOWTO_FAIL,
      UPDATE_HOWTO_START,
      UPDATE_HOWTO_SUCCESS,
      UPDATE_HOWTO_FAIL
     } from '../actions/action'
  
  const initialState = {
    user: [],
    howto: [],
    isloading: false,
    error: '',
  };
  
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_USER:
        return {
          ...state,
          user: [...state.user, action.payload]
        };
      case FETCH_HOWTO_START:
        return {
          ...state,
          isloading: true
      };
      case FETCH_HOWTO_SUCCESS:
        return {
          ...state,
          isloading: false,
          howto: [...state.howto, action.payload]
      };
      case FETCH_HOWTO_FAIL:
        return {
          ...state,
          isloading: false,
          error: action.payload
      };
      case UPDATE_HOWTO_START:
        return {
          ...state,
          isloading: true
      };
      case UPDATE_HOWTO_SUCCESS:
        return {
          ...state,
          isloading: false,
          howto: [...state.howto, action.payload]
      };
      case UPDATE_HOWTO_FAIL:
        return {
          ...state,
          isloading: false,
          error: action.payload
      };

      default:
        return state;
    }
  };