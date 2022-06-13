import axios from "axios";
// mock server with users
const baseUrl = "http://localhost:8000/";

// get all users with async await and try catch
export const getUsers = async () => {
  try {
    const response = await axios.get(baseUrl + "users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get user by id with async await and try catch
export const getUserById = async (id) => {
  try {
    const response = await axios.get(baseUrl + "users/" + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// add new user with async await and try catch
export const addUser = async (user) => {
  try {
    const response = await axios.post(baseUrl + "users", user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update user with async await and try catch
export const updateUser = async (user) => {
  try {
    const response = await axios.put(baseUrl + "users/" + user.id, user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// delete user with async await and try catch
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(baseUrl + "users/" + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
