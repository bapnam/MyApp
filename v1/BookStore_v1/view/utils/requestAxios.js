import axios from "axios";

const requestAxios = axios.create({
  baseURL: "http://localhost:9000/v1",
});

export default requestAxios;
