import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>Hello</div>
      </Provider>
    );
  }
}

export default App;
