import React, { Component } from "react";
import { connect } from "react-redux";
import Channels from "./Channels";

class ChannelsContainer extends Component {
  render() {
    if (this.props.channels.length < 1) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        Channels!
        <Channels channels={this.props.channels} />
      </div>
    );
  }
}

function marStateToProps(state) {
  return { channels: state.channels };
}
export default connect(marStateToProps)(ChannelsContainer);
