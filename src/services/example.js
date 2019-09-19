import request from '../utils/request';

export function query(data) {
  return request('http://148.70.121.59:9001/emstu/teacher/register', data);
}
