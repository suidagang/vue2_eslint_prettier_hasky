let appConfig = {
  name: '全景项目', //项目名称
  environment: 'dev'
}
if (appConfig.environment === 'dev') {
  appConfig.requestUrl = ''
} else if (appConfig.environment === 'test') {
  appConfig.requestUrl = ''
} else if (appConfig.environment === 'QA') {
  appConfig.requestUrl = ''
} else if (appConfig.environment === 'product') {
  appConfig.requestUrl = ''
}
module.exports = appConfig
