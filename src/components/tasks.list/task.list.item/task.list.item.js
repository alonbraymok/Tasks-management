import React from "react";
import {
  TaskWrapper,
  TaskContainer,
  TextWrapper,
  DescriptionArea,
  PriorityTag,
} from "./task.list.item.styled";
import { CommonText } from "../../reuseable.components/text/text";

export function TaskItemList({ task, index, push }) {
  const { title, description, _id, priority, creator } = task;

  function handleTaskClick() {
    // push(`task/${_id}`);
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

  return (
    <TaskContainer>
      <TextWrapper>
        <CommonText value={title} size={"20px"} />
        <CommonText
          value={creator.name}
          size={"15px"}
          style={{ opacity: 0.6 }}
        />
      </TextWrapper>
      <TaskWrapper onClick={handleTaskClick}>
        <PriorityTag color={() => handlePriorityColor(priority)}>
          <CommonText value={`${priority} priority`} color={"#fff"} />
        </PriorityTag>
        <TextWrapper>
          <DescriptionArea value={description} />
        </TextWrapper>
      </TaskWrapper>
    </TaskContainer>
  );
}
