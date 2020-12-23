import {applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {localstorageMiddleware} from "./persistantState";

export const middlewareEnhancer = applyMiddleware(thunk, localstorageMiddleware);
