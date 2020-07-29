import axios from 'axios'

export const POST_USER = "POST_USER";

export const postUser = (userInput) => {
  return dispatch => {
    axios.post("https://reqres.in/api/user", userInput)
    .then(res => {
      dispatch({ type: POST_USER, payload: res.data });
    })
    .catch(err => console.log({ err }))
  };
};

export const FETCH_HOWTO_START = "FETCH_HOWTO_START"
export const FETCH_HOWTO_SUCCESS = "FETCH_HOWTO_SUCCESS"
export const FETCH_HOWTO_FAIL = "FETCH_HOWTO_FAIL"

export const fetchHowto = () => {
  return dispatch => {
    dispatch({ type: FETCH_HOWTO_START });

    axios.get('https://reqres.in/api/users?page=2')
    .then(res => {
      console.log(res.data.data)
      dispatch({ type: FETCH_HOWTO_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_HOWTO_FAIL, payload: {err} });
    });
    }
}

export const DELETE_HOWTO_START = "DELETE_HOWTO_START"
export const DELETE_HOWTO_SUCCESS = "DELETE_HOWTO_SUCCESS"
export const DELETE_HOWTO_FAIL = "DELETE_HOWTO_FAIL"

export const deleteHowto = (state) => {
  return dispatch => {
    dispatch({ type: DELETE_HOWTO_START });

    axios.delete(`https://reqres.in/api/users/${state.id}`)
    .then(res => {
      dispatch({ type: DELETE_HOWTO_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_HOWTO_FAIL, payload: {err} });
    });
    }
}

export const UPDATE_HOWTO_START = "UPDATE_HOWTO_START"
export const UPDATE_HOWTO_SUCCESS = "UPDATE_HOWTO_SUCCESS"
export const UPDATE_HOWTO_FAIL = "UPDATE_HOWTO_FAIL"

export const updateHowto = (state) => {
  return dispatch => {
    dispatch({ type: UPDATE_HOWTO_START });

    axios.put(`https://reqres.in/api/users/${state.id}`, state)
    .then(res => {
      dispatch({ type: UPDATE_HOWTO_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_HOWTO_FAIL, payload: {err} });
    });
    }
}
