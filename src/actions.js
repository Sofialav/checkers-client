import request from "superagent";
// const baseUrl = "http://localhost:4000";
const baseUrl = "https://damp-mesa-25825.herokuapp.com";

//add  error:
export const displayError = payload => {
  return {
    type: "ERROR_MESSAGE",
    payload
  };
};
// remove error:
export const removeError = () => {
  return {
    type: "REMOVE_ERROR"
  };
};
// login
export const loginUser = payload => {
  return {
    type: "JWT",
    payload
  };
};
export function login(data) {
  return async function(dispatch) {
    try {
      const response = await request.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body.jwt);
      await dispatch(action);
      dispatch(removeError());
    } catch (error) {
      const errorMessage = displayError(error.response.body.message);
      dispatch(errorMessage);
    }
  };
}
// signup
const addUser = () => {
  return {
    type: "ADD_USER"
  };
};
export function signup(data) {
  return async function(dispatch) {
    try {
      await request.post(`${baseUrl}/user`).send(data);
      const action = addUser();
      await dispatch(action);
      dispatch(removeError());
    } catch (error) {
      const errorMessage = displayError(error.response.body.message);
      dispatch(errorMessage);
    }
  };
}
