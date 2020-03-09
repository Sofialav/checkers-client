import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { signup } from "../actions";

class SignupFormContainer extends React.Component {
  state = { name: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);
    this.setState({ name: "", password: "" });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Please sign up if you don`t have an account:</h3>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          buttonName="Sign up"
        />
      </div>
    );
  }
}

export default connect(null, { signup })(SignupFormContainer);
