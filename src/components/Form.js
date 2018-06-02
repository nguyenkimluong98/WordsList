import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: "",
      vn: ""
    };
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    const { en, vn } = this.state;
    this.props.dispatch({
      type: "ADD_WORD",
      en,
      vn
    });
    this.props.dispatch({
      type: "TOGGLE_IS_ADDING"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.en}
          onChangeText={text => this.setState({ en: text })}
          underlineColorAndroid="transparent"
          placeholder="English word"
        />
        <TextInput
          style={styles.textInput}
          value={this.state.vn}
          onChangeText={text => this.setState({ vn: text })}
          underlineColorAndroid="transparent"
          placeholder="Meaning"
        />
        <TouchableOpacity style={{ alignItems: "center" }} onPress={this.onAdd}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "pink" }}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Form);

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center"
  },
  textInput: {
    height: 50,
    backgroundColor: "#e4f6d4",
    margin: 10,
    paddingHorizontal: 10,
    fontSize: 18
  }
});
