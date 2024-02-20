import {put, delay, select} from 'redux-saga/effects'
import todoSlice from "../../redux/todoSlice.js";
import selectors from "../../redux/selectors.js";

export default function* setDataWorker(action) {
    const {payload} = action
    payload.preventDefault()
    yield put(todoSlice.actions.setLoading(true))
    yield delay(3000)
    yield put(todoSlice.actions.addItems(payload.target.text_input.value))

    yield put(todoSlice.actions.setLoading(false))
    const items = yield select(selectors.items)
    localStorage.setItem('items', JSON.stringify(items))
    payload.target.text_input.value = ''
}