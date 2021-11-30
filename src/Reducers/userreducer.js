import {ADD_USER, GET_ARTICLES} from '../actions/Actiontype';
const INITIAL_STATE = {
    users:null
}
const userreducer  = (state = INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case ADD_USER:return {
            ...state,users:action.user
        }
        default:return state;
    }
}
export default userreducer;