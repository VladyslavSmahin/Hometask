import {configureStore } from '@reduxjs/toolkit'
import counterSlice from "../engine/counter/counter.js";
import todoSlice from "../engine/todo/redux/todoSlice.js";
import sagaMiddleWare from "./middleware/saga.js";
import {rootSaga} from "./rootSaga.js";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer,
    },
    middleware: () => [
        //logger,
        //thunk,
     sagaMiddleWare
    ]
})
sagaMiddleWare.run(rootSaga)