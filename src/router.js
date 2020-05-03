import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import { CreateTask } from "./pages/create.task/create.task";
import { DisplayTask } from "./pages/display.task/disaply.task";
import { AuthPage } from "./pages/auth/auth";
import { Homepage } from "./pages/homepage/homepage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/create" component={CreateTask} />
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/task/:taskId" component={DisplayTask} />
    </Switch>
  );
};

export { Router };
