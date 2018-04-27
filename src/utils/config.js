import { getSearchParam } from '@a/js/utils.js';
var server = getSearchParam('server');
//活动域线上环境
// let ACTIVITY_SERVER_HOST = 'https://liveactivityoffice.lizhi.fm';
// let ACTIVITY_SERVER_HOST = '//h5live.lizhi.fm';
let BASE_HOST = 'http://172.17.10.2:7018/live-web';
if (server === 'dev') {
    //开发环境
    BASE_HOST = '//sftest.lizhi.fm';
} else if (server === 'pre') {
    //预发环境
    BASE_HOST = '//h5livepre.lizhi.fm';
}
export { BASE_HOST, server };