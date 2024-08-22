 
import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice';
import privacySlice from './slices/privacySlice';


const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer,
    }
});


export default counterStore;







 