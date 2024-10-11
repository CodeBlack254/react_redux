import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; 
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            }
            state.totalQuantity += action.payload.quantity || 1; 
        },
        remove(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.totalQuantity -= state.items[index].quantity; 
                state.items.splice(index, 1); 
            }
        },
        // edit(state, action) {
        //     const existingItem = state.items.find(item => item.id === action.payload.id);
        //     if (existingItem) {
        //         state.totalQuantity += action.payload.quantity - existingItem.quantity; // Adjust total quantity
        //         existingItem.quantity = action.payload.quantity; // Update quantity
        //     }
        // },
    },
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer; 