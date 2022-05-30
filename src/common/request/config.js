const sysConfig = require('@/config/sysConfig');
let baseUrl = sysConfig.requestUrl;
const config = {
  /* 登录 */
  loginSys: baseUrl + '/uaa/oauth/token', //登录接口
  getLoginUserInfo: baseUrl + '/goods/plaUser/getLoginUserInfo' // 获取用户信息
};
export default config;
