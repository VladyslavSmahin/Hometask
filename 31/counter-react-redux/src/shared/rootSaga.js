import {all, call} from 'redux-saga/effects'
import todoWatcher from "../engine/todo/saga/todoWatcher.js";

export function* rootSaga() {
    yield all([
            call(todoWatcher)
        ]
    )
}