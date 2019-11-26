/**
 * KYIV MEDIA 26.11.2019
 */
import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from "./actionsTypes";

let newTaskId = 0;
//Action : ADD_NEW_TASK
export const addNewTask = inputTaskName => {
  return {
    type: ADD_NEW_TASK,
    taskId: newTaskId++,
    taskName: inputTaskName
  };
};
//Action: "toggle 1 task to completed / incompleted"
export const toggleTask = taskId => {
  return {
    type: TOGGLE_ONE_TASK,
    taskId: taskId
  };
};
