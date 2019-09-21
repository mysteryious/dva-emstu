import instance from '../utils/instance';

export function login(data) {
  return instance.post('/emstu/teacher/login', data);
}
  