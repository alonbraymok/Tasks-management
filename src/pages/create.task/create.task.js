import React, { useState, useLayoutEffect, useEffect } from "react";
import { CommonInput } from "../../components/reuseable.components/input/input";
import { CommonButton } from "../../components/reuseable.components/button/button";
import { createTask } from "../../services/task/task";
import { useDispatch, useSelector, batch } from "react-redux";
import { setTasks } from "../../store/actions/task";
import {
  InputWrapper,
  Wrapper,
  PriorityWrapper,
  PriorityTag,
} from "./create.task.styled";
import { CommonText } from "../../components/reuseable.components/text/text";

const priorities = ["HIGH", "MID", "LOW"];

export function CreateTask({ history }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState(null);

  const tasks = useSelector(({ taskReducer }) => taskReducer.tasks);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setTasks());
  }, []);

  function handleCreateTask() {
    const task = {
      title: taskName,
      description: taskDescription,
      priority: taskPriority,
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

  function handlePriorityColor(priority) {
    switch (priority) {
      case "HIGH":
        return "linear-gradient(74deg, rgba(255,53,53,1) 0%, rgba(212,43,43,0.7693452380952381) 37%, rgba(186,3,134,1) 100%);";
      case "MID":
        return "linear-gradient(74deg, rgba(1,156,23,1) 0%, rgba(43,212,101,0.7693452380952381) 37%, rgba(46,214,95,1) 100%);";
      case "LOW":
        return "linear-gradient(74deg, rgba(53,191,255,1) 0%, rgba(43,161,212,0.7693452380952381) 37%, rgba(46,65,214,1) 100%);";
      default:
        break;
    }
  }

  function renderPriorities() {
    return priorities.map((item, index) => (
      <PriorityTag
        key={index}
        bgColor={() => handlePriorityColor(item)}
        onClick={() => setTaskPriority(item)}
        selected={taskPriority === item}
      >
        <CommonText value={`${item} priority`} color={"#fff"} />
      </PriorityTag>
    ));
  }

  return (
    <Wrapper>
      <InputWrapper>
        <CommonInput
          placeholder={"Task name"}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <CommonInput
          placeholder={"Task description"}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </InputWrapper>
      <PriorityWrapper>{renderPriorities()}</PriorityWrapper>
      <CommonButton title={"Create Task"} onClick={() => handleCreateTask()} />
    </Wrapper>
  );
}
