
import * as ActionTypes from './ActionTypes';

// band remover from local state


export const bandReducer = (state = {band: '', members: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BAND_MEMBERS: 
            return {...state, members: action.payload}
        case ActionTypes.ADD_BAND: 
            return {...state, band: action.payload}
        default:
            return state;
    }
}


 