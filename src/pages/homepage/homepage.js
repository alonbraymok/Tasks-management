import React, { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import Navbar from "../../components/homepage/navbar/navbar";
import { TasksList } from "../../components/tasks.list/tasks.list/tasks.list";
import SideMenu from "../../components/side.menu/side.menu";
import { TaskListContainer } from "./homepage.styled";
import TreeComponent from "../../components/test/test";
import ImageUpload from "../../components/image.upload/image.upload";
import { CommonText } from "../../components/reuseable.components/text/text";

export function Homepage({ history }) {
  const user = useSelector(({ userReducer }) => userReducer.user);

  const dispatch = useDispatch();

  return (
    <>
      <CommonText value={"Coming soon"} />
      <Navbar user={user} push={history.push} />
      <SideMenu right={true} />
      <TaskListContainer>
        <TasksList push={history.push} />
      </TaskListContainer>
    </>
  );
}
