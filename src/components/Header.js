import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text />
        <Text>MY WORDS</Text>
        <TouchableOpacity onPress={() => this.props.dispatch({ type: "TOGGLE_IS_ADDING" })}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "red"
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Header);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20
  }
});
