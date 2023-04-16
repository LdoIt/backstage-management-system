/*
 * @Date: 2023-04-15 15:31:02
 */
export function setToken(key, value) {
  localStorage.setItem(key, value);
}
export function getToken(key) {
  return localStorage.getItem(key);
}
export function removeToken(key) {
  localStorage.removeItem(key);
}