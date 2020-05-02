import axios from "axios";
const baseURL = `http://localhost:8080/`;

export const getData = async (request) => {
  const {
    url,
    method = "POST",
    headers: requestHeader,
    ...restRequest
  } = request;

  try {
    const response = await axios.request({
      url,
      method,
      baseURL,
      headers: { ...requestHeader },
      data: restRequest,
    });

    if (response.data.err) {
      console.log("Error");
    }

    return Promise.resolve(response.data);
  } catch (err) {
    console.log("Error", err);

    return Promise.reject(err);
  }
};
