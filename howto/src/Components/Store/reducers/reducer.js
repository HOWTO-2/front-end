    import {FETCH} from '../actions/action'
  
  const initialState = {

  };
  
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH:
        return {
          
        };
      default:
        return state;
    }
  };