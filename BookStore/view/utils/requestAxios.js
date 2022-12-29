import axios from "axios";
import { URL_REQUESTAXIOS } from "./url";

const requestAxios = axios.create({
  baseURL: URL_REQUESTAXIOS,
});

export default requestAxios;
