import axios from "axios";

const requestAxios = axios.create({
  baseURL: "http://10.10.43.70:9000/v1",
});

export default requestAxios;
