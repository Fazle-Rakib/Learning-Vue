import axios from "axios";

const apiUrl = "https://api-nodejs-todolist.herokuapp.com";
const guest = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
export { guest };
