import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../action/slice";

export default configureStore({
    reducer:{
        todos: todoReducer,
    }
});

//holds our state and combine reducers