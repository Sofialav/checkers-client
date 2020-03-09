import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthContainer from "./components/AuthContainer";
import ChannelsContainer from "./components/ChannelsContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route path="/" exact component={AuthContainer} />
        <Route path="/channels" exact component={ChannelsContainer} />
      </Provider>
    );
  }
}

export default App;
