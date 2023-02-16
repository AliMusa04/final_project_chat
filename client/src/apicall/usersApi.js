import { BASE_URL } from "../consts";

const { default: axiosInstance } = require(".");

// LOGIN USER
export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:8080/api/auth/login",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//REGISTER USER
export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:8080/api/auth/register",
      payload
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

// Get USER INFO
export const getUserInfo = async ({ id }) => {
  try {
    const response = await axiosInstance.post(
      `http://localhost:8080/api/users/${id}`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
