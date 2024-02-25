/*
import {put, select} from 'redux-saga/effects';
import {updateItem} from "../../redux/todoSlice";

export default function* changeItemWorker(action) {
    const {index, newValue} = action.payload;
    const items = yield select(state => state.todo.items);
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    yield put(updateItem({index, newValue}));
    localStorage.setItem('items', JSON.stringify(updatedItems));
    yield;
}
*/


