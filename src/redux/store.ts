import {configureStore} from "@reduxjs/toolkit";
import TestSlice from "@/redux/slice/testSlice";


const store =  configureStore({
    reducer:{
        test : TestSlice,
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch