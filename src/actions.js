import request from "superagent";
const baseUrl = "http://localhost:4000";
// const baseUrl = "https://damp-mesa-25825.herokuapp.com";

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
export function login(data, history) {
  return async function(dispatch) {
    try {
      const response = await request.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body.jwt);
      await dispatch(action);
      await dispatch(removeError());
      return history.push("/channels");
    } catch (error) {
      if (error.response) {
        const errorMessage = displayError(error.response.body.message);
        return dispatch(errorMessage);
      }
      console.error(error);
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
// get channels

// export const allChannels = payload => {
//   return {
//     type: "ALL_CHANNELS",
//     payload
//   };
// };

// const stream = new EventSource(`${baseUrl}/stream`);
// export function getChannels() {
//   stream.onmessage = event => {
//     console.log("event.data TEST", event.data);
//     const parser = JSON.parse(event.data);
//     this.props.dispatch(parser);
//     console.log("PARSED DATA", parser);
//   };
// }
