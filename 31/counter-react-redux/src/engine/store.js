import {configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counter/counter.js";
import {thunk} from "redux-thunk";
import todoSlice from "./todo/todoSlice.js";
import logger from 'redux-logger'
/*import {logger} from "../middleware/logger.js";*/

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer,
    },
    middleware: () => [logger, thunk]
})