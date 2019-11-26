/**
 * KYIV MEDIA 26.11.2019
 */
import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
  RefreshControl,
  TextInput
} from "react-native";

export default class TaskItemComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            //Call this action in Container
          }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        ></TouchableOpacity>
        <Text
          style={{
            margin: 20,
            color: this.props.completed == true ? "green" : "black"
          }}
        >
          {this.props.taskName}
        </Text>
      </View>
    );
  }
}
