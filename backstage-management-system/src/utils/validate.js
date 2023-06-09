/*
 * @Date: 2023-04-15 15:23:36
 */
export function validateUsername(rule, value, callback) {
  let reg = /^[a-zA-Z0-9]{4,16}$/;
  if (value == '') {
    callback(new Error('用户名不能为空'));
  }else if(!reg.test(value)) {
    callback(new Error('用户名只能是大小写字母和数字4-16位'));
  }else {
    callback();
  }
}

export function validatePassword(rule, value, callback) {
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
  if (value == '') {
    callback(new Error('密码不能为空'));
  }else if(!reg.test(value)) {
    callback(new Error('至少8-16个字符，至少1个大写字母，1个小写字母和1个数字'));
  }else {
    callback();
  }
}