import {configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counter/counter.js";
import todoSlice from "./todo/todoSlice.js";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer,
    }
})