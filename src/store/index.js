import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  countSlice from './slice/Count';

const rootReducer = combineReducers({
    countSlice
})

const store = configureStore({
    reducer: rootReducer
})


export default store;