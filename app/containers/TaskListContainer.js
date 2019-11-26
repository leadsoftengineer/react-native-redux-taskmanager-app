/**
 * KYIV MEDIA 26.11.2019
 */
import { connect } from "react-redux";
import TaskListComponent from "../components/TaskListComponent";

const mapStateToProps = state => {
  alert(`state was sent to task list = ${JSON.stringify(state)}`);
  return {
    tasks: !state.taskReducers ? [] : state.taskReducers
  };
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;
