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

// export const fetchNewBand = (data) => dispatch => {
//     dispatch(addNewBand(data))
//     fetch(bandsUrl, {
//         method: 'POST', 
//         body: JSON.stringify(data),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//         })
//         .then(response => {
//         console.log(response);
//         })
//         .catch((error) => {
//         console.error('Error:', error);
//     });
// }
export const addNewBand = (data) => ({
    type: ActionTypes.ADD_NEW_BAND,
    payload: data
})

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
    type: ActionTypes.ADD_NEW_BAND,
    payload: data

})


export const editBand = (data) => dispatch => ({
    type: ActionTypes.EDIT_PROFILE,
    payload: data
})
// export const fetchBand = data => dispatch => {
//     console.log(data)
//     fetch(urls.bandsUrl, {
//         method: 'GET', 
//         body: JSON.stringify(data.email),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     .then(response => console.log(response))
//     .then(response => dispatch(subscribeUser(response)))
//     .catch((error) => {
//     console.error('Error:', error);
// });
// }
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
