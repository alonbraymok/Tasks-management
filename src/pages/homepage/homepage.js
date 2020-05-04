import React, { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import Navbar from "../../components/homepage/navbar/navbar";
import { TasksList } from "../../components/tasks.list/tasks.list/tasks.list";

export function Homepage({ history }) {
  const user = useSelector(({ userReducer }) => userReducer.user);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar user={user} push={history.push} />
      <TasksList push={history.push} />
    </>
  );
}
