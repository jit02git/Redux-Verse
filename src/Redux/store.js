import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Slice/Counter'

const store =  configureStore({
    reducer:{
        counter: counterSlice,
    },
});

export default store;