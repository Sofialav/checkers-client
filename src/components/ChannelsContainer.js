import React, { Component } from "react";
import { connect } from "react-redux";
// import { getChannels } from "../actions";
import Channels from "./Channels";

const baseUrl = "http://localhost:4000";
class ChannelsContainer extends Component {
  stream = new EventSource(`${baseUrl}/stream`);
  componentDidMount() {
    this.stream.onmessage = event => {
      const parsed = JSON.parse(event.data);
      this.props.dispatch(parsed);
    };
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
export default connect(marStateToProps)(ChannelsContainer);
