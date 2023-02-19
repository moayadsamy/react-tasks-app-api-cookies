import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "auth-slice",
  initialState: {
    loggedIn: JSON.parse(localStorage.getItem("loggedIn")),
  },
  reducers: {
    signOut(state, action) {
      state.loggedIn = false;
      state.token = null;
    },
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
