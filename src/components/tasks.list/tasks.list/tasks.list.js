import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../../../store/actions/task";
import { TaskItemList } from "../task.list.item/task.list.item";

export function TasksList({ push }) {
  const dispatch = useDispatch();

  const tasks = useSelector(({ taskReducer }) => taskReducer.tasks);

  useLayoutEffect(() => {
    dispatch(setTasks());
  }, []);

  function renderTasks() {
    return tasks.map((task, index) => (
      <TaskItemList task={task} key={index} index={index} push={push} />
    ));
  }

  return renderTasks();
}
