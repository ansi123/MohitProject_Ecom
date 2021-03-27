import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Todo from "./Todo";

export default function Routing() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/Todo" exact component={Todo} />
      </Switch>
    </>
  );
}
