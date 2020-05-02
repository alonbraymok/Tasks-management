import React from "react";
import { TaskWrapper } from "./task.list.item.styled";
import { CommonText } from "../../reuseable.components/text/text";

export function TaskItemList({ task, index, push }) {
  const { title, description, _id } = task;

  function handleTaskClick() {
    push(`task/${_id}`);
  }
  return (
    <TaskWrapper onClick={handleTaskClick}>
      <CommonText value={`#${index}`} />
      <CommonText value={`title: ${title}`} />
      <CommonText value={`description: ${description}`} />
    </TaskWrapper>
  );
}
