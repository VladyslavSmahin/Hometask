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
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item !== action.payload);
        },
    }
})
export default todoSlice;