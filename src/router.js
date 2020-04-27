import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import { CreateTask } from "./pages/create.task/create.task";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/create" component={CreateTask} />
    </Switch>
  );
};

export { Router };
