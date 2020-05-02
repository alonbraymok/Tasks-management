import React, { useEffect, useState } from "react";
import { Wrapper, TaskWrapper, DeleteTaskWrapper } from "./disaply.task.styled";
import { CommonText } from "../../components/reuseable.components/text/text";
import { useParams } from "react-router-dom";
import { getTaskById, deleteTaskById } from "../../services/task/task";
import { CommonButton } from "../../components/reuseable.components";

export function DisplayTask() {
  let { taskId } = useParams();
  const [task, setTask] = useState(null);
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
    </Wrapper>
  );
}
