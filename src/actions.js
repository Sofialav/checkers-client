import request from "superagent";
const baseUrl = "http://localhost:4000";
// const baseUrl = "https://damp-mesa-25825.herokuapp.com/"

// login
export const loginUser = payload => {
  return {
    type: "JWT",
    payload
  };
};
export const login = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = loginUser(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};
