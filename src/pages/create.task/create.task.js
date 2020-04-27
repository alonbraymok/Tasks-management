import React, { useState } from "react";
import { CommonInput } from "../../components/reuseable.components/input/input";
import { CommonButton } from "../../components/reuseable.components/button/button";

export function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  function handleCreateTask() {
    console.log(taskName);
  }

  return (
    <>
      <CommonInput
        placeholder={"Task name"}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <CommonInput
        placeholder={"Task description"}
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <CommonButton title={"Create Task"} onClick={() => handleCreateTask()} />
    </>
  );
}
