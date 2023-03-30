import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

type studentState = {
  isAuthLoading: boolean;
  account: string | null;
};

const initialState: studentState = {
  isAuthLoading: true,
  account: null,
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {},
});

export const selectAuthState = (state: RootState) => state.studentState; //AuthState ถ้าอยากใช้ isAuthLoading , account ให้ใช้ selectAuthState

export default studentSlice.reducer;
