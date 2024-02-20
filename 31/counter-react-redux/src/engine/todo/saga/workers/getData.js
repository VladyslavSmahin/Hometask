import {put} from 'redux-saga/effects'
import todoSlice from "../../redux/todoSlice.js";

export default function* getDataWorker (action){
    console.log(action)
    yield put(todoSlice.actions.setLoading(true))
    console.log(localStorage)
    const data = JSON.parse(localStorage.getItem('items')) || [];
    console.log(data)
    yield put(todoSlice.actions.setItems(data));
    yield put(todoSlice.actions.setLoading(false))
}
