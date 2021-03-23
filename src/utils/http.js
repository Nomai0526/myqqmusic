import axios from 'axios';
import { message } from 'antd';

const service = axios.create({
  timeout: 10000,
});

service.interceptors.response.use((response) => {
  const {
    status, data, statusText, headers,
  } = response;
  if (status === 200) {
    console.log('200');
    return headers['content-type'] === 'application/json' ? JSON.parse(data) : data;
  }
  console.log('else');
  message.warning(`${status}-${statusText}`);
  return response;
});

export default {
  get: (url, params, option) => service.get(url, { ...option, ...params }),
  post: (url, params, option) => service.post(url, params, option),
  delete: (url, params, option) => service.delete(url, { ...option, ...params }),
};
