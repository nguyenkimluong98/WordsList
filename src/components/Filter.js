import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

import { filterMemorized, filterShowALL, filterNeedPractice } from "../redux/actionCreator";

class Filter extends Component {
  getTextStyle = statusName => {
    const { myFilterStatus } = this.props;
    if (statusName === myFilterStatus) return { color: "yellow", fontWeight: "bold" };
    return styles.buttonText;
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.filterShowALL()}>
          <Text style={this.getTextStyle("SHOW_ALL")}>SHOW ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.filterMemorized()}>
          <Text style={this.getTextStyle("MEMORIZED")}>MEMORIZED</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.filterNeedPractice()}>
          <Text style={this.getTextStyle("NEED_PRACTICE")}>NEED PRACTICE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  myFilterStatus: state.filterStatus
});

const mapDispatchToProps = {
  filterShowALL,
  filterNeedPractice,
  filterMemorized
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#583c3c",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  buttonText: {
    color: "#fff"
  }
});
