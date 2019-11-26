/**
 * KYIV MEDIA 26.11.2019
 */

import { connect } from "react-redux";
import { toggleTask } from "../actions";
import TaskItemComponent from "../components/TaskItemComponent";

//no state and no action thats why not dispatch
const TaskItemContainer = connect()(TaskItemComponent);
export default TaskItemContainer;
