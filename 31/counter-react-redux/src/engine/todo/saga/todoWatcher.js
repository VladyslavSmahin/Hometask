import {takeEvery} from 'redux-saga/effects'
import getDataWorker from "./workers/getData";
import setDataWorker from "./workers/setData.js";
import {getDataAsyncAction, setDataAsyncAction} from './asynxActions'
export default function* todoWatcher (){
    yield takeEvery(getDataAsyncAction.type, getDataWorker)    // getData
    yield takeEvery(setDataAsyncAction.type, setDataWorker)   // setData

}