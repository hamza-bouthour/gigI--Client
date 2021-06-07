
import * as ActionTypes from './ActionTypes';

// band remover from local state
function removeBand(list, band) {
    return list.filter(item => item.name !== band.name)
 }

export const bands = (state = {isLoading: true, errMess: null, bands: []}, action) => {
    switch (action.type) {
        case ActionTypes.BANDS_LOADING: 
            return {...state, isLoading: true, errMess: null, bands: []}
        case ActionTypes.BANDS_FAILED: 
            return {...state, isLoading: true, errMess: action.payload}
        case ActionTypes.ADD_BANDS: 
            return {...state, isLoading: false, errMess: null, bands: action.payload}
        case ActionTypes.ADD_NEW_BAND: 
            return {...state, bands: state.bands.push(action.payload)}
        case ActionTypes.DELETE_BAND: 
            return {...state, bands: removeBand(state.bands, action.payload)}
        default:
            return state;
    }
}


 