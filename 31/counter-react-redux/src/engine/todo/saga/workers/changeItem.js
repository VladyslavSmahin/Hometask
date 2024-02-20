import {put, select} from 'redux-saga/effects';
import todoSlice from "../../redux/todoSlice.js";

export default function* changeItemWorker(action) {
    const {payload} = action;
    const items = yield select(state => state.todo.items);
    console.log(items)
    const index = items.indexOf(payload);
    console.log(index);
    if (index !== -1) {
        const updatedItems = [...items];
        updatedItems[index] = 'новое значение';
        //в целом я понял что можно установить значение откуда угодно(добавить в лист еще один инпут
        // что б сразу добавлялся, либо добавить кнопку,которая будет показывать инпут - но логика изменения есть )
        yield put(todoSlice.actions.setItems(updatedItems));
    }
}
