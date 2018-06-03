import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import getTemp from "../api/getTemp";

import { fetchError, fetchSuccess, startFetchData, fetchDataThunk } from "../redux/actionCreator";

class Main extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        cityName: ""
      });
  }

  getWheatherMessage() {
    const { isLoading, error, temp, cityName } = this.props;
    if (isLoading) return "loading...";
    if (error) return "Da co loi xay ra! Vui long thu lai!";
    if (!cityName) return "Nhap ten thanh pho cua ban!";
    return `${cityName} hien tai la: ${temp}oC`;
  }

  getTempByCityName() {
    const { cityName } = this.state;
    // this.props.startFetchData();
    // getTemp(this.state.cityName)
    //   .then(temp => this.props.fetchSuccess(cityName, temp))
    //   .catch(() => this.props.fetchError());
    this.props.fetchDataThunk(cityName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{this.getWheatherMessage()}</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.cityName}
          onChangeText={text => this.setState({ cityName: text })}
          underlineColorAndroid="transparent"
          placeholder="Type the city name"
        />
        <TouchableOpacity style={styles.button} onPress={this.getTempByCityName.bind(this)}>
          <Text style={{ fontSize: 16, color: "yellow", fontWeight: "bold" }}>Lấy nhiệt độ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cityName: state.cityName,
  temp: state.temp,
  error: state.error,
  isLoading: state.isLoading
});

const mapDispatchToProps = {
  startFetchData,
  fetchSuccess,
  fetchError,
  fetchDataThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  },
  message: {
    fontSize: 25,
    color: "white"
  },
  button: {
    borderRadius: 20,
    backgroundColor: "green",
    height: 50,
    width: 120,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: 300,
    margin: 10,
    backgroundColor: "tomato",
    fontSize: 16,
    paddingHorizontal: 10,
    color: "white"
  }
});
