import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import { CreateTask } from "./pages/create.task/create.task";
import { DisplayTask } from "./pages/display.task/disaply.task";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/create" component={CreateTask} />
      <Route exact path="/task/:taskId" component={DisplayTask} />
    </Switch>
  );
};

export { Router };
