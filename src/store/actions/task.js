import { SET_TASKS } from "../actions.type/task";
import { getTasks } from "../../services/task/task";

export const setTasks = (tasks) => async (dispatch, getState) => {
  let newTasks = null;
  if (tasks) {
    newTasks = tasks;
  } else {
    newTasks = await getTasks();
  }
  dispatch({
    type: SET_TASKS,
    payload: newTasks,
  });
};
