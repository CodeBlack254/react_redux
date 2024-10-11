import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import cartSlice from './cartSlice';
import productSlice from './productSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedProductReducer = persistReducer(persistConfig, productSlice); 

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        products: persistedProductReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

console.log('Initial State:', store.getState());

export const persistor = persistStore(store);



