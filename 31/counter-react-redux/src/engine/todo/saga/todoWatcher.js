import {takeEvery} from 'redux-saga/effects'
import getDataWorker from "./workers/getData";
import setDataWorker from "./workers/setData";
import clearStoreWorker from "./workers/clearStore";
import clearItemWorker from "./workers/clearItem";
import changeItemWorker from "./workers/changeItem.js";
import {getDataAsyncAction, setDataAsyncAction, clearStoreAsyncAction, clearItemAsyncAction, changeItemAsyncAction} from './asynxActions'
export default function* todoWatcher (){
    yield takeEvery(getDataAsyncAction.type, getDataWorker)
    yield takeEvery(setDataAsyncAction.type, setDataWorker)
    yield takeEvery(clearStoreAsyncAction.type, clearStoreWorker)
    yield takeEvery(clearItemAsyncAction.type, clearItemWorker)
    yield takeEvery(changeItemAsyncAction.type, changeItemWorker)
}