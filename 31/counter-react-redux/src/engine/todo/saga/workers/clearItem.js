import {put, select} from 'redux-saga/effects';
import todoSlice from "../../redux/todoSlice.js";

export default function* clearItemWorker(action) {
    const {payload} = action;
    const items = yield select(state => state.todo.items);
    const updatedItems = items.filter(item => item !== payload);
    yield put(todoSlice.actions.setItems(updatedItems));
    localStorage.setItem('items', JSON.stringify(updatedItems))
}
