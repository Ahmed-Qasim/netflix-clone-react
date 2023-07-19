import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
    reducer: {
        userSlice: userSliceReducer,
        searchSlice: searchReducer,
    },
});
