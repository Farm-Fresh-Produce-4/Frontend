import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://freshproduce-backend.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
