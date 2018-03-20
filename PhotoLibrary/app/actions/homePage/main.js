import * as types from '../../constants/ActionTypes';

export function fetchChange(){
    return {
        type:types.APPEND_LIKE, //在ActionTypes文件中声明的类型
    };
}

export function moveLoad(){
    return {
        type:types.LOAD_MOVE,
    };
}