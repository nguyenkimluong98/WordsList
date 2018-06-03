import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";

import store from "./redux/store";

import Main from "./components/Main";

class Wheather extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default Wheather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
