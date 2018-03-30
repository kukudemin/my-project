import React from "react"
import {combineReducers} from "redux"
import homeReducer from "./home"
import zanReducer from "./circle";
const  reducer =combineReducers({
    home:homeReducer,zan:zanReducer
});
export  default reducer;