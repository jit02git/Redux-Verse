import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Slice/Counter'

export const store =  configureStore({
    reducer:{
        counter: counterSlice,
    },
});