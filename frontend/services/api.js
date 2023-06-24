import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api";

export const fetchAllUsers = async () => {
  const response = await axios.get("/visitors");
  return response.data;
};

export const fetchUser = async (id) => {
  const response = await axios.get(`/visitors/${id}`);
  return response.data;
};

export const addUser = async (visitorData) => {
  const response = await axios.post("/visitors", visitorData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`/visitors/${id}`);
  return response.data;
};

export const editUser = async (id, visitorData) => {
  const response = await axios.put(`/visitors/${id}`, visitorData);
  return response.data;
};

// export const editUserName = async (id, name) => {
//   const response = await axios.patch(`/visitors/${id}/${name}`);
//   return response.data;
// };

// export const editUserSurname = async (id, surname) => {
//   const response = await axios.patch(`/visitors/${id}/${surname}`);
//   return response.data;
// };
