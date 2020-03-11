import React, { Component } from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import "./Auth.css";

class Auth extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div>
          <p id="error-msg">{this.props.errors}</p>
          <LoginFormContainer history={this.props.history} />
          <SignupFormContainer />
        </div>
      );
    } else {
      return (
        <div>
          <p>INFOBOX holder</p>
        </div>
      );
    }
  }
}

export default Auth;
