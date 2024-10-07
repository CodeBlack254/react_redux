import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice
        // product: productSlice
    }
});

console.log('Initial State:', store.getState());

export default store;