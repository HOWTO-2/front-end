    import {
      POST_USER, 
      POST_HOWTO,
      FETCH_HOWTO_FAIL,
      FETCH_HOWTO_START,
      FETCH_HOWTO_SUCCESS,
      UPDATE_HOWTO_FAIL,
      UPDATE_HOWTO_START,
      UPDATE_HOWTO_SUCCESS,
      DELETE_HOWTO_FAIL,
      DELETE_HOWTO_START,
      DELETE_HOWTO_SUCCESS
    } from '../actions/action'
  
  const initialState = {
    user: [],
    howto: [[]],
    isloading : false,
    error: '',      
  };
  
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_USER:
        return {
          ...state,
          user: [...state.user, action.payload]
        };
      case POST_HOWTO:
        return {
          ...state,
          howto: [[...state.howto[0], action.payload]]
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
          howto: [...state.howto[0], action.payload]
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
        console.log(state.howto[0])  
        return {
          ...state,
          isloading: false,
          howto: [[...state.howto[0].filter(v => v.id !== action.payload.id), action.payload]]
        };
      case UPDATE_HOWTO_FAIL:  
        return {
          ...state,
          isloading: false,
          error: action.payload
        };
        case DELETE_HOWTO_START:  
        return {
          ...state,
          isloading: true
        };
        case DELETE_HOWTO_SUCCESS:
          return {
            ...state,
            isloading: false,
            howto: [[...state.howto[0].filter(v => v.id !== action.payload.id)]]

          };
        case DELETE_HOWTO_FAIL:  
          return {
            ...state,
            isloading: false,
            error: action.payload
          };
        default:
          return state;
    }
  };

