import * as ActionTypes from './ActionTypes';
import urls from '../config';


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

export const addBandMembers = data => ({
    type: ActionTypes.ADD_BAND_MEMBERS,
    payload: data,
   
});

export const addBand = (data) => ({
    type: ActionTypes.ADD_BAND,
    payload: data,
})

export const fetchBands = () => dispatch => {
    dispatch(bandsLoading())
    return fetch(urls.bandsUrl, {
        method: 'GET', 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(response => dispatch(addBands(response.data)))
        .catch((error) => {
            new Error(error.message)
    });
}

export const searchBand = (data) => ({
    type: ActionTypes.SEARCH_BAND,
    payload: data

})

export const fetchQueryBands = (data) => dispatch => {
    fetch(urls.searchUrl, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(response => dispatch(searchBand(response.data)))
        .catch((error) => {
            new Error(error.message)
    });
}

export const addNewBand = data => {
    return {
        type: ActionTypes.ADD_NEW_BAND,
        payload: data
    }
}
export const addNewUser = data => {
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
        .catch((error) => {
        new Error('Error:', error);
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

export const fetchDeleteBand = (band) => dispatch => {
    dispatch(deleteBand(band))
    fetch(`${urls.bandsUrl}/${band.band_id}`, {
                method: 'DELETE', 
                body: JSON.stringify(band),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .catch((error) => {
            new Error('Error:', error);
        });
}
export const deleteBand = band => ({
    type: ActionTypes.DELETE_BAND,
    payload: band
})
export const loginUser = data  => dispatch => {
    fetch(urls.usersUrl, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.data[0]) {
            dispatch(subscribeUser(response.data[0]))
        }
        else {
            dispatch(subscribeUser('no data'))
        }
    })
    .catch((error) => {
    new Error('Error:', error);
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
