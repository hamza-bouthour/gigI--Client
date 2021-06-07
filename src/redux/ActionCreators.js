import * as ActionTypes from './ActionTypes';
import bandsUrl from '../config';

// bands reducer actions
export const bandsLoading = () => ({
    type: ActionTypes.BANDS_LOADING
});
export const bandsFailed = errMess => ({
    type: ActionTypes.BANDS_FAILED,
    payload: errMess
});
export const addBands = data => ({
    type: ActionTypes.ADD_BANDS,
    payload: data
});
export const fetchBands = () => dispatch => {
    dispatch(bandsLoading())
  return  fetch(bandsUrl, {
        method: 'GET', 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(data => dispatch(addBands(data)))
        .catch((error) => {
            new Error(error.message)
    });
}

export const fetchNewBand = (data) => dispatch => {
    dispatch(addNewBand(data))
    fetch(bandsUrl, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => {
        console.log(response);
        })
        .catch((error) => {
        console.error('Error:', error);
    });
}
export const addNewBand = (data) => ({
    type: ActionTypes.ADD_NEW_BAND,
    payload: data
})

export const fetchNewGuest= (data) => dispatch => {
    dispatch(addNewGuest(data))
    fetch(bandsUrl, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => console.log(response))
        .catch((error) => {
        console.error('Error:', error);
    });
}
export const addNewGuest = (data) => ({
    type: ActionTypes.ADD_NEW_BAND,
    payload: data

})


export const editBand = (data) => dispatch => ({
    type: ActionTypes.EDIT_PROFILE,
    payload: data
})

