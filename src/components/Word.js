import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

import { toggleMemorized, toggleShow } from "../redux/actionCreator";

class Word extends Component {
  render() {
    const { en, vn, memorized, isShow, id } = this.props.myWord;
    const textDecorationLine = memorized ? "line-through" : "none";
    const memorizedButtonText = memorized ? "foget" : "memorized";
    const meaning = isShow ? vn : "---";
    const showingButtonText = isShow ? "hide" : "show";
    return (
      <View style={styles.container} key={this.props.myKey}>
        <Text style={{ textDecorationLine, fontSize: 16, fontWeight: "bold" }}>{en}</Text>
        <Text style={{ color: "red" }}>{meaning}</Text>
        <View style={styles.controller}>
          <TouchableOpacity style={styles.buttonOpacity} onPress={() => this.props.toggleMemorized(id)}>
            <Text>{memorizedButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOpacity} onPress={() => this.props.toggleShow(id)}>
            <Text>{showingButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  toggleMemorized,
  toggleShow
};

export default connect(mapStateToProps, mapDispatchToProps)(Word);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d2edf6",
    padding: 10,
    margin: 10,
    borderRadius: 8
  },
  controller: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonOpacity: {
    backgroundColor: "mediumspringgreen",
    padding: 10,
    margin: 10,
    borderRadius: 8
  }
});
