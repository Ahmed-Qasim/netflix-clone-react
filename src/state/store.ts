import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import searchReducer from "./searchSlice";
import movieApiReducer, { movieApi } from "./ApiSlice";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

const presistedUserReducer = persistReducer(persistConfig, userSliceReducer);

const storeReducer = {
    userSlice: presistedUserReducer,
    searchSlice: searchReducer,
    movieApi: movieApiReducer,
};

export const store = configureStore({
    reducer: storeReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware),
});

export const persistor = persistStore(store);
