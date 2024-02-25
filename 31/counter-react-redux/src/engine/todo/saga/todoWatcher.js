import {takeEvery} from 'redux-saga/effects'
import getDataWorker from "./workers/getData";
import setDataWorker from "./workers/setData";
import clearStoreWorker from "./workers/clearStore";
import clearItemWorker from "./workers/clearItem";
import {toggleItemsWorker} from "./workers/toggleStylesItem.js";
import {
    getDataAsyncAction,
    setDataAsyncAction,
    clearStoreAsyncAction,
    clearItemAsyncAction,
    toggleCheckboxAction, filterItemsAsyncAction
} from './asynxActions'
import filterItemsWorker from "./workers/filterItems";


export default function* todoWatcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker)
    yield takeEvery(setDataAsyncAction.type, setDataWorker)
    yield takeEvery(clearStoreAsyncAction.type, clearStoreWorker)
    yield takeEvery(clearItemAsyncAction.type, clearItemWorker)
    yield takeEvery(toggleCheckboxAction.type, toggleItemsWorker)
    yield takeEvery(filterItemsAsyncAction.type, filterItemsWorker)
}