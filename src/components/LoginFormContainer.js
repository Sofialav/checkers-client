import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions";

class LoginFormContainer extends React.Component {
  state = { name: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
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
        <h3>Please login to play the game:</h3>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          buttonName="Login"
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}
export default connect(mapStateToProps, { login })(LoginFormContainer);
