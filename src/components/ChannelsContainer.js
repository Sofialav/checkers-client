import React, { Component } from "react";
import { connect } from "react-redux";
// import { getChannels } from "../actions";
import Channels from "./Channels";

const baseUrl = "http://localhost:4000";
class ChannelsContainer extends Component {
  state = { name: "" };

  stream = new EventSource(`${baseUrl}/stream`);
  componentDidMount() {
    this.stream.onmessage = event => {
      const parsed = JSON.parse(event.data);
      this.props.dispatch(parsed);
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Channels
          channels={this.props.channels}
          user={this.props.user}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}

function marStateToProps(state) {
  return { channels: state.channels, user: state.user };
}
export default connect(marStateToProps)(ChannelsContainer);
