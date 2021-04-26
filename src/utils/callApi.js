import { api } from "./config";
import Axios from "axios";
export const callApi = (uri, method = "GET", data, headers) => {
  return Axios({
    method,
    url: api + "/" + uri,
    data,
    headers
  });
};
