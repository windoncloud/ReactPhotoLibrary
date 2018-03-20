/*
这个文件写的是所有要发送的消息，不能相同，命名方式生活驼峰，都是大写。
同时命名注意区分，最好按模块带前缀，每个组件都有一个对应的消息。
*/


export const APPEND_LIKE = 'APPEND_LIKE';
export const CHANGE_ACTIVE_PLAYLIST = 'CHANGE_ACTIVE_PLAYLIST';
export const REQUEST_ERROR= 'REQUEST_ERROR';
/*登录*/
export const LOGIN_VERIFY= 'LOGIN_VERIFY';
/**登录 */
export const LOGIN_SURE= 'LOGIN_SURE';
export const LOAD_MOVE= 'LOAD_MOVE';
