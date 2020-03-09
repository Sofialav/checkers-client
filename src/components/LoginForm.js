import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            placeholder="name"
            type="text"
            value={this.props.values.name}
            onChange={this.props.onChange}
            name="name"
          ></input>
          <input
            placeholder="password"
            type="password"
            value={this.props.values.password}
            onChange={this.props.onChange}
            name="password"
          ></input>
          <Button type="submit">{this.props.buttonName}</Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
