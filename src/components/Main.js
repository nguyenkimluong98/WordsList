import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

import Word from "./Word";
import Filter from "./Filter";
import Header from "./Header";
import Form from "./Form";

//console.disableYellowBox = true;
console.ignoredYellowBox = ["Warning: Each"];

class Main extends Component {
  _renderItem = ({ item, index }) => <Word myWord={item} myKey={index} />;

  getWordList = () => {
    const { myFilter, myWords } = this.props;
    if (myFilter == "MEMORIZED") return myWords.filter(e => e.memorized);
    else if (myFilter == "NEED_PRACTICE") return myWords.filter(e => !e.memorized);
    return myWords;
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ flex: 10 }}>
          {this.props.myIsAdding ? <Form /> : null}
          <FlatList
            data={this.getWordList()}
            renderItem={this._renderItem}
            keyExtractor={item => {
              item.id;
            }}
          />
        </View>
        <Filter />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { myWords: state.arrWords, myFilter: state.filterStatus, myIsAdding: state.isAdding };
}

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
