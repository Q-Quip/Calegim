import { configureStore } from '@reduxjs/toolkit'
import productCounterReducer from './productCounter/productCounterSlice'
import productToBuyReducer from './productCardsBuy/productCardsBuy'

const store = configureStore({
    reducer: {
        productCounter: productCounterReducer,
        productToBuy: productToBuyReducer,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch