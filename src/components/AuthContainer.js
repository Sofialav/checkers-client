import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./Auth";

class AuthContainer extends Component {
  render() {
    return (
      <div>
        <Auth user={this.props.user} errors={this.props.errors} />
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
