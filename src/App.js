import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import LoginFormContainer from "./components/LoginFormContainer";
import AuthContainer from "./components/AuthContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          Hello
          <Route path="/" exact component={AuthContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
