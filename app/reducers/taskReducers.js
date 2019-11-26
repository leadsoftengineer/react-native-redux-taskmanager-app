/**
 * KYIV MEDIA 26.11.2019
 */
import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from "../actions/actionsTypes";

const taskReducers = (tasks = [], action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return [
        ...tasks,
        {
          taskId: action.taskId,
          taskName: action.taskName,
          completed: false
        }
      ];

    case TOGGLE_ONE_TASK:
      return task.map(task =>
        task.taskId === action.taskId
          ? { ...task, completed: !task.completed }
          : task
      );

    default:
      return tasks; // state does not change
  }
};

export default taskReducers;
