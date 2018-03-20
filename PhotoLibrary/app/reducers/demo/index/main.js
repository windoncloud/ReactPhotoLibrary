import * as types from '../../../constants/ActionTypes';
let initState = {
    loading:false, //初始状态
};
export default function read(state=initState, action){
    switch(action.type){//对不同的动作消息作出处理，来改变状态
        case types.APPEND_LIKE:
         return Object.assign({}, state, {
             loading:true,
         });
         case types.LOAD_MOVE:
         return Object.assign({}, state, {
             loading:false,
         });
         default : 
         return state;
    }
}