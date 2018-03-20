import { combineReducers } from 'redux';
import main from './demo/index/main';
import { routerReducer as routing, } from 'react-router-redux';
import test from './demo/index/test';//引入你写的动作处理组件
const rootReducer = combineReducers({//将所有的动作处理文件联系到一起，同时和整个stora相关联
  main,
  test,
  routing
});

export default rootReducer;
