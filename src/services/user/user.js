import { httpRequest } from "../../util/http";

export async function test() {
  try {
    const response = await httpRequest({
      url: "user/test",
    });
    if (!response.err) {
      console.log("Error");
    }
    console.log({ response });
  } catch (err) {
    console.log("Error", err);
  }
}

export async function createUser(data) {
  try {
    const response = await httpRequest({
      url: "user/create",
      ...data,
    });
    if (!response.err) {
      console.log("Error");
    }
    return response.data;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function login(data) {
  try {
    const response = await httpRequest({
      url: "user/login",
      ...data,
    });
    if (!response.err) {
      console.log("Error");
    }
    console.log({ response });
    return response.user[0];
  } catch (err) {
    console.log("Error", err);
  }
}

export async function getUsers() {
  try {
    const response = await httpRequest({
      url: "user/users",
      method: "GET",
    });
    console.log({ response });
    return response.users;
  } catch (err) {
    console.log("Error", err);
  }
}
