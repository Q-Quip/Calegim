import { createSlice } from "@reduxjs/toolkit"

interface InitialCount {
    countProducts: number;
}

const initialState:InitialCount = { countProducts: 0 };

const productCounter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.countProducts++;
        },
        decrement(state) {
            state.countProducts--;
        },
        deleteByAmount(state, action) {
            state.countProducts -= action.payload;
        }
    }
})

export const actionsCount = productCounter.actions;
export const {increment, decrement} = productCounter.actions;
export default productCounter.reducer;
