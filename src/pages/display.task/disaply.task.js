import React, { useEffect, useState } from "react";
import {
  Wrapper,
  TaskWrapper,
  DeleteTaskWrapper,
  EditWrapper,
} from "./disaply.task.styled";
import { CommonText } from "../../components/reuseable.components/text/text";
import { useParams } from "react-router-dom";
import {
  getTaskById,
  deleteTaskById,
  createTask,
} from "../../services/task/task";
import {
  CommonButton,
  CommonInput,
} from "../../components/reuseable.components";

export function DisplayTask({ history }) {
  let { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isTaskDelete, setIsTaskDelete] = useState(false);

  useEffect(() => {
    handleGetTask();
  }, []);

  async function handleGetTask() {
    const responseTask = await getTaskById(taskId);
    setTask(responseTask);
  }

  async function handleDeleteTask() {
    const response = await deleteTaskById(taskId);
    setIsTaskDelete(response);

    setTimeout(() => reDirectToTasksList(), 2000);
  }

  async function handleEditTask() {
    const newTask = { ...task };
    newTask.title = taskName;
    newTask.description = taskDescription;

    createTask(newTask);
  }

  function reDirectToTasksList() {
    history.push("/create");
  }

  return (
    <Wrapper>
      {isTaskDelete ? (
        <div>Task delete successfully</div>
      ) : (
        <>
          <DeleteTaskWrapper>
            <CommonButton title={"X"} onClick={handleDeleteTask} />
          </DeleteTaskWrapper>
          {task && (
            <TaskWrapper>
              <CommonText value={`title: ${task.title}`} />
              <CommonText value={`description: ${task.description}`} />
              <CommonText value={`owner: ${task.creator.name}`} />
              <CommonText
                value={`subTasks: ${task.children.length > 0 ? "Yes" : "No"}`}
              />
            </TaskWrapper>
          )}
        </>
      )}
      <EditWrapper>
        <CommonText value={"Edit Task"} />
        <CommonInput
          placeholder={"New Task name"}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <CommonInput
          placeholder={"New Task description"}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <DeleteTaskWrapper>
          <CommonButton title={"Edit"} onClick={handleEditTask} />
        </DeleteTaskWrapper>
      </EditWrapper>
    </Wrapper>
  );
}
