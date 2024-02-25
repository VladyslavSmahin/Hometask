import { put, select } from 'redux-saga/effects';
import todoSlice from '../../redux/todoSlice';

export function* toggleItemsWorker(action) {
    const {payload} = action;
    yield put(todoSlice.actions.toggleItem(payload));
    console.log('Received payload in toggleItemsWorker:', payload);
    const state = yield select();
    localStorage.setItem('items', JSON.stringify(state.todo.items));
}
