
import * as ActionTypes from './ActionTypes';


export const user = (state = {loading: false, loggedIn: false, errMess: null, user: null}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER: 
            return {...state,loading: true, loggedIn: true, errMess: null, user: action.payload}
        case ActionTypes.LOGOUT_USER: 
            return {...state,loading: false, loggedIn: false, errMess: null, user: null}
        case ActionTypes.LOGIN_SUCCESSFUL:
            return {...state, loading: false}
        default:
            return state;
    }
}


 