/**
 * KYIV MEDIA 26.11.2019
 */
import { combineReducers } from "redux";
import taskReducers from "./taskReducers";

const allReducers = combineReducers({
  taskReducers
});

export default allReducers;
