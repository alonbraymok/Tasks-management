import React, { useState, useLayoutEffect } from "react";
import { CommonInput } from "../../components/reuseable.components/input/input";
import { CommonButton } from "../../components/reuseable.components/button/button";
import { createTask } from "../../services/task/task";
import { TasksList } from "../../components/tasks.list/tasks.list/tasks.list";
import { useDispatch, useSelector, batch } from "react-redux";
import { setTasks } from "../../store/actions/task";

export function CreateTask({ history }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const tasks = useSelector(({ taskReducer }) => taskReducer.tasks);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setTasks());
  }, []);

  function handleCreateTask() {
    const task = {
      title: taskName,
      description: taskDescription,
    };
    createTask(task);
    initialStateValues();
    dispatch(setTasks([...tasks, task]));
  }

  function initialStateValues() {
    batch(() => {
      setTaskDescription("");
      setTaskName("");
    });
  }

  return (
    <>
      <CommonInput
        placeholder={"Task name"}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <CommonInput
        placeholder={"Task description"}
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <CommonButton title={"Create Task"} onClick={() => handleCreateTask()} />
      <div>Task</div>
      <TasksList push={history.push} />
    </>
  );
}
