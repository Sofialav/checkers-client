import { combineReducers } from "redux";
import user from "./user";
import errors from "./errors";
import channels from "./channels";

export default combineReducers({
  user,
  errors,
  channels
});
