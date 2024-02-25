import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        addItem: (state, action) => {
            state.items.push({text: action.payload, id: uuidv4(), isChecked: false});
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        toggleItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            state.items[index].isChecked = !state.items[index].isChecked;
            if (state.items[index].isChecked) {
                const [removedItem] = state.items.splice(index, 1);
                state.items.push(removedItem);
            }
        },

    }
})
export const {updateItem, updateStyle} = todoSlice.actions;
export default todoSlice;