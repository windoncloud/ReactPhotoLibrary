import * as types from '../../../constants/ActionTypes';

export default function readTest(state=0, action){
    switch(action.type){
        case types.CHANGE_ACTIVE_PLAYLIST:
         return state + 1;
         default : 
         return state;
    }
}