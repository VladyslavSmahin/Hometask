import {put, select} from 'redux-saga/effects';
import selectors from "../../redux/selectors.js";
import todoSlice from "../../redux/todoSlice.js";

export default function* filterItemsWorker(action) {
    const {payload: inputValue} = action;
    const allItems = yield select(selectors.items);
    const data = JSON.parse(localStorage.getItem('items')) || [];
    if (inputValue.trim() === "") {
        yield put(todoSlice.actions.setItems(data));
    } else {
        const filteredItems = allItems.filter(item =>
            item.text.toLowerCase().includes(inputValue.toLowerCase())
        );
        yield put(todoSlice.actions.setItems(filteredItems));
    }

}