import {put} from 'redux-saga/effects'
import todoSlice from "../../redux/todoSlice.js";

export default function* getDataWorker (action){
    yield put(todoSlice.actions.setLoading(true))
    const data = JSON.parse(localStorage.getItem('items')) || [];
    yield put(todoSlice.actions.setItems(data));
    yield put(todoSlice.actions.setLoading(false))
}
