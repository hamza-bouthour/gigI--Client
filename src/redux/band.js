
import * as ActionTypes from './ActionTypes';


export const bandReducer = (state = {band: '', members: [], bandId: null}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BAND_MEMBERS: 
            return {...state, members: action.payload}
        case ActionTypes.ADD_BAND: 
            return {...state, band: action.payload}
        case ActionTypes.ADD_NEW_ID: 
            return {...state, bandId: action.payload}
        default:
            return state;
    }
}


 