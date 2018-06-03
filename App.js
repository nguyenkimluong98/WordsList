import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";

import Main from "./src/components/Main";
import store from "./src/redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
