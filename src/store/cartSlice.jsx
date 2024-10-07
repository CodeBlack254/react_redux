import { createSlice  } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload)
            console.log("Current State:", state);
            console.log("Adding Item:", action.payload);
        },
        // delete(){},
        // edit(){}
    }
});

export const {add} = cartSlice.actions;
export default cartSlice.reducer; 


// ###########################################################3
// import { createSlice } from "@reduxjs/toolkit";

// // Initial state for the cart, can be an object to hold more information if needed
// const initialState = {
//     items: [],
//     totalQuantity: 0,
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         add(state, action) {
//             // Add the item to the cart
//             const existingItem = state.items.find(item => item.id === action.payload.id);
//             if (existingItem) {
//                 // If the item already exists in the cart, increase its quantity
//                 existingItem.quantity += action.payload.quantity;
//             } else {
//                 // If it's a new item, add it with quantity
//                 state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
//             }
//             state.totalQuantity += action.payload.quantity || 1; // Update total quantity
//         },
//         remove(state, action) {
//             // Remove an item from the cart
//             const index = state.items.findIndex(item => item.id === action.payload.id);
//             if (index !== -1) {
//                 state.totalQuantity -= state.items[index].quantity; // Decrease total quantity
//                 state.items.splice(index, 1); // Remove the item from the cart
//             }
//         },
//         edit(state, action) {
//             // Edit an item's quantity in the cart
//             const existingItem = state.items.find(item => item.id === action.payload.id);
//             if (existingItem) {
//                 state.totalQuantity += action.payload.quantity - existingItem.quantity; // Adjust total quantity
//                 existingItem.quantity = action.payload.quantity; // Update quantity
//             }
//         },
//     },
// });

// // Export actions for use in components
// export const { add, remove, edit } = cartSlice.actions;

// // Export reducer to be used in the store
// export default cartSlice.reducer;