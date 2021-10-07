import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";

export default configureStore({
    reducer:{
        todos: todoReducer,
    }
});

//holds our state and combine reducers