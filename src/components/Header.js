import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleIsAdding } from "../redux/actionCreator";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text />
        <Text>MY WORDS</Text>
        <TouchableOpacity onPress={() => this.props.toggleIsAdding()}>
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

const mapDispatchToProps = dispatch => {
  return { toggleIsAdding: bindActionCreators(toggleIsAdding, dispatch) };
};

export default connect(null, mapDispatchToProps)(Header);

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
