import axios from 'axios'

export const FETCH = "FETCH";

export const fetch = () => {
  return dispatch => {
    dispatch({ type: FETCH });
  };
};
