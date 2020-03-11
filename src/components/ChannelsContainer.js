import React, { Component } from "react";
import { connect } from "react-redux";
import { getChannels } from "../actions";
import Channels from "./Channels";

class ChannelsContainer extends Component {
  componentDidMount() {
    console.log("MOUNTED!");
    this.props.getChannels();
  }
  render() {
    if (!this.props.channels.length) {
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
export default connect(marStateToProps, { getChannels })(ChannelsContainer);
