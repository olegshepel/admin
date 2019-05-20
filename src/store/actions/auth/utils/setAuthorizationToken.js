import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    // must be Bearer
    axios.defaults.headers.common['Authorization'] = `Bearer + ${token}`;

    axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.withCredentials = true;

  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
