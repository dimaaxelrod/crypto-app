import { configureStore } from "@reduxjs/toolkit";
import { coinsApi } from "./coins/coins.api";
import { userReducer } from "./coins/user.slice";

export const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
