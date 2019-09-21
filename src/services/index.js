import instance from '../utils/instance';

export function login(data) {
  return instance.post('/emstu/teacher/login', data);
}
export function register(data) {
  return instance.post('/emstu/teacher/register', data);
}