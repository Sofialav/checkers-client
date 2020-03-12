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
    return (
      <div>
        <form>
          <h3>Create a new channel:</h3>
          <input
            placeholder="Channel name"
            onChange={this.props.onChange}
            type="text"
            name="name"
            value={this.props.values.name}
          ></input>
          <button type="submit" onSubmit={this.props.onSubmit}>
            Add
          </button>
        </form>
        <div>
          <h3>Join a channel:</h3>
          {list}
        </div>
      </div>
    );
  }
}

export default Channels;
