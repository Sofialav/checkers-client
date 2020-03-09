import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import "./AuthContainer.css";

class AuthContainer extends Component {
  render() {
    return (
      <div className="d-inline-flex justify-content-center" id="form-container">
        <Auth
          user={this.props.user}
          errors={this.props.errors}
          history={this.props.history}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    errors: state.errors
  };
}
export default connect(mapStateToProps)(AuthContainer);
