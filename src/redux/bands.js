
import * as ActionTypes from './ActionTypes';

// band remover from local state
function removeBand(list, band) {
    
    const newList = list.filter(item => item.id !== band.id)
    return newList
}

export const bands = (state = {isLoading: true, errMess: null, isSearching: false, bands: [], searchBands: [], photos: ''}, action) => {
    switch (action.type) {
        case ActionTypes.BANDS_LOADING: 
            return {...state, isLoading: true, errMess: null, bands: null}
        case ActionTypes.BANDS_FAILED: 
            return {...state, isLoading: true, errMess: action.payload}
        case ActionTypes.ADD_BANDS: 
            return {...state, isLoading: false, errMess: null, bands: action.payload, isSearching: false}
        case ActionTypes.ADD_NEW_BAND: 
            return {...state, bands: state.bands.concat(action.payload)}
        case ActionTypes.DELETE_BAND: 
            return {...state, bands: removeBand(state.bands, action.payload)}
        case ActionTypes.SEARCH_BAND: 
            return {...state, searchBands: action.payload, isSearching: true}
        case ActionTypes.ADD_PHOTOS: 
            return {...state, photos: action.payload}
        default:
            return state;
    }
}


 