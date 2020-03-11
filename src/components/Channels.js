import React, { Component } from "react";
import { Link } from "react-router-dom";

class Channels extends Component {
  render() {
    if (!this.props.user) {
      return (
        <h3>
          Please <Link to="/">login</Link> to view the channels
        </h3>
      );
    }
    if (!this.props.channels.length) {
      return <div>Loading...</div>;
    }
    const list = this.props.channels.map(channel => {
      return <p key={channel.id}>{channel.name}</p>;
    });
    return <div>{list}</div>;
  }
}

export default Channels;
