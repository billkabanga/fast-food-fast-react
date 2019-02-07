import axios from 'axios';
import errorOccured from '../actions/errorAction';

const axiosInstance = axios.create({
  baseURL: 'https://bill-fast-food.herokuapp.com/api/v1/',
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data),
);

const postDataThunkPublic = (endpoint, data, actionCreator, method) => (dispatch) => {
  return axiosInstance[method](endpoint, data).then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((err) => {
    dispatch(errorOccured(err));
  });
};

const postDataThunkPrivate = (endpoint, data, actionCreator, method) => (dispatch) => {
  const token = localStorage.getItem('token');

  axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
  return axiosInstance[method](endpoint, data).then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((err) => {
    dispatch(errorOccured(err));
  });
};

export { postDataThunkPublic, postDataThunkPrivate, axiosInstance };
