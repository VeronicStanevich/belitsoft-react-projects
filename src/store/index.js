import {createStore} from 'redux'
import {combinedReducer} from "./reducers";
import {middlewareEnhancer} from "./middlewares";

const preloadedState = JSON.parse(localStorage.getItem('store-state')) || {};

const store = createStore(combinedReducer, preloadedState, middlewareEnhancer);

export default store;
