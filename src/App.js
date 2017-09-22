import React, { Component } from "react";
import InboxPageContainer from "./redux/InboxPageContainer";
import { Provider } from "react-redux";

import setupStore from "./redux/setupStore";
const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxPageContainer />
      </Provider>
    );
  }
}
