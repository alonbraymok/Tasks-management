import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../../../store/actions/task";
import { TaskItemList } from "../task.list.item/task.list.item";
import styled from "styled-components";

const TaskItemWrapper = styled.div`
  margin: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80vw;
  flex-wrap: wrap;
`;

export function TasksList({ push }) {
  const dispatch = useDispatch();

  const tasks = useSelector(({ taskReducer }) => taskReducer.tasks);

  useLayoutEffect(() => {
    dispatch(setTasks());
  }, []);

  function renderTasks() {
    return tasks.map((task, index) => (
      <TaskItemWrapper key={index}>
        <TaskItemList task={task} index={index} push={push} />
      </TaskItemWrapper>
    ));
  }

  return <Wrapper>{renderTasks()}</Wrapper>;
}
