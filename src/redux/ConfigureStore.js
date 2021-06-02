import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { bands } from './bands';

// const config = {
//     key: 'root',
//     storage,
//     debug: true
// }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bands
        }),
        composeEnhancer(applyMiddleware(thunk, logger))
    );

    // const persistor = persistStore(store);

    return  store; 
}