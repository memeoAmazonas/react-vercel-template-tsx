import axios from 'axios';
import { URL } from '~/constant/constant';
const http = axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json',
  },
});
http.defaults.timeout = 6000 * 10;
/*http.interceptors.request.use(
  async (req) => {
    const { jwtToken } = (await Auth.currentSession()).getIdToken();
    req.headers.common.Authorization = `Bearer ${jwtToken}`;
    return req;
  },
  (error) => Promise.reject(error),
);*/
export default http;
