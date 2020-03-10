import React, { Component } from "react";

class Channels extends Component {
  render() {
    const list = this.props.channels.map(channel => {
      return <p key={channel.id}>{channel.name}</p>;
    });
    return <div>{list}</div>;
  }
}

export default Channels;
