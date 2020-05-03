import React, { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import Navbar from "../../components/homepage/navbar/navbar";

export function Homepage({ history }) {
  const user = useSelector(({ userReducer }) => userReducer.user);

  const dispatch = useDispatch();

  return <Navbar user={user} push={history.push} />;
}
