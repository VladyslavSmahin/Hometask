import todoSlice from "../../redux/todoSlice.js";
import {put} from 'redux-saga/effects'

export default function* clearStoreWorker() {
    localStorage.removeItem('items');
    yield  put(todoSlice.actions.setItems([]))
}