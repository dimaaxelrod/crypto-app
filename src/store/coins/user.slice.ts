import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_CREDENTIALS } from "../constants";

type UserState = {
  username: string;
  coins: string[];
  authorized: boolean;
  error: string;
};

const initialState: UserState = {
  username: "",
  coins: [],
  authorized: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ [key: string]: string }>) {
      for (let key in USER_CREDENTIALS) {
        if (USER_CREDENTIALS[key] !== action.payload[key]) {
          state.error = "Login or password is wrong";
          return;
        }
      }
      state.username = action.payload.username;
      state.authorized = true;
      state.error = "";
    },
    logout(state) {
      state.authorized = false;
      state.coins = [];
      state.username = "";
    },
    addUserCoins(state, action: PayloadAction<string[]>) {
      state.coins = state.coins.concat(action.payload);
    },
    removeUserCoins(state, action: PayloadAction<string[]>) {
      state.coins = state.coins.filter(
        (coin) => !action.payload.includes(coin)
      );
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
