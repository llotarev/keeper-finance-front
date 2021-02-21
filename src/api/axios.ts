import * as axios from "axios";

export const instance = axios.default.create({
  baseURL: "http://localhost:4000/api",
});
