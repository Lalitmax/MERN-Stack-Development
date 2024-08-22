import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        addition: (state, action) => {
            state.counter += action.payload.number;

        },
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice;