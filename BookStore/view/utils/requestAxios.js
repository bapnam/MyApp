import axios from "axios";

const requestAxios = axios.create({
  baseURL: "http://192.168.31.115:9000/v1",
});

export default requestAxios;
