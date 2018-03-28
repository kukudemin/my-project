import React from "react"
import {combineReducers} from "redux"
import homeReducer from "./home"
const  reducer =combineReducers({
    home:homeReducer
});
export  default reducer;