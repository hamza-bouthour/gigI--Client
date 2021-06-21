import * as ActionTypes from './ActionTypes';
import urls from '../config';


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
   return fetch(urls.bandsUrl, {
        method: 'GET', 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        
        .then(response => response.json())
        .then(response => dispatch(addBands(response)))
        .then(response => console.log(response))
        .catch((error) => {
            new Error(error.message)
    });
}
export const fetchQueryBands = (data) => dispatch => {
    // console.log(JSON.stringify(data))
    dispatch(bandsLoading())
    fetch(urls.searchUrl, {
        method: 'POST', 
        body: JSON.stringify(data),
        // headers: {
        //     "Content-type": "application/json; charset=UTF-8"
        // }
        })
        
        .then(response => response.json())
        // .then(response => console.log(response))
        // .then(response => dispatch(addBands(response)))
        .catch((error) => {
            new Error(error.message)
    });
}

export const addNewBand = data => {
    console.log(data)
return {
    type: ActionTypes.ADD_NEW_BAND,
    payload: data
}
}
export const addNewUser = data => {
    console.log('new USER')
    return {
        type: ActionTypes.ADD_NEW_USER,
        payload: data
    }
}

export const fetchNewGuest= (data) => dispatch => {
    dispatch(addNewGuest(data))
    fetch(urls.bandsUrl, {
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
    type: ActionTypes.ADD_NEW_GUEST,
    payload: data

})


export const editBand = (data) => dispatch => ({
    type: ActionTypes.EDIT_PROFILE,
    payload: data
})
export const searchBand = data => dispatch => {

}
export const fetchDeleteBand = (band) => dispatch => {
    fetch(`${urls.bandsUrl}/${band.band_id}`, {
                method: 'DELETE', 
                body: JSON.stringify(band),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => dispatch(deleteBand(band)))
            .then(response => console.log(response))
            .catch((error) => {
            console.error('Error:', error);
        });
}
export const deleteBand = band => ({
    type: ActionTypes.DELETE_BAND,
    payload: band
})
export const loginUser = data  => dispatch => {
    console.log(data)
    fetch(`${urls.usersUrl}/`, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(response => dispatch(subscribeUser(response.data[0])))
    .catch((error) => {
    console.error('Error:', error);
});
}
export const subscribeUser = data => ({
    type: ActionTypes.LOGIN_USER,
    payload: data
})
export const loginSuccessful = () => ({
    type: ActionTypes.LOGIN_SUCCESSFUL
    
})

export const logoutUser = () => ({
    type: ActionTypes.LOGOUT_USER
    
})
