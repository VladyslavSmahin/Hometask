import { createAction } from "@reduxjs/toolkit";

export const getDataAsyncAction = createAction('GET_DATA_ASYNC')
export const setDataAsyncAction = createAction('SET_DATA_ASYNC')
export const clearStoreAsyncAction = createAction('CLEAR_STORE_ASYNC')
export const clearItemAsyncAction = createAction('CLEAR_ITEM', (item) => ({
    payload: item
}));
export const toggleCheckboxAction = createAction('TOGGLE_CHECKBOX_ITEM');