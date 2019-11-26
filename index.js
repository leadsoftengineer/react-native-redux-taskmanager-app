/**
 * KYIV MEDIA 26.11.2019
 */
import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./app/reducers/index";
import TaskManagerComponent from "./app/components/TaskManagerComponent";

let store = createStore(allReducers);

const App = () => (
  <Provider store={store}>
    <TaskManagerComponent />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
