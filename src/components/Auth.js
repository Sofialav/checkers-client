import React, { Component } from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

class Auth extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div>
          <p>{this.props.errors}</p>
          <LoginFormContainer />
          <SignupFormContainer />
        </div>
      );
    }
    return <div></div>;
  }
}

export default Auth;
