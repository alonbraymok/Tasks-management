import { httpRequest } from "../../util/http";

export async function createTask(data) {
  try {
    const response = await httpRequest({
      url: "task/create",
      ...data,
    });
    if (!response.err) {
      console.log("Error");
    }
  } catch (err) {
    console.log("Error", err);
  }
}

export async function getTasks() {
  try {
    const response = await httpRequest({
      url: "task/tasks",
      method: "GET",
    });
    console.log({ response });
    return response.tasks;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function getTaskById(id) {
  try {
    const response = await httpRequest({
      url: `task/task/${id}`,
      method: "GET",
    });
    return response.task;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function deleteTaskById(id) {
  try {
    const response = await httpRequest({
      url: `task/task/delete/${id}`,
      method: "DELETE",
    });
    if (response.status) {
      return true;
    }
    return false;
  } catch (err) {
    console.log("Error", err);
  }
}
