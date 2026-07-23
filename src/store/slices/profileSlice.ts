import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ProfileState = {
  name: string;
  role: string;
};

const initialState: ProfileState = {
  name: "Waseem Khan",
  role: "Frontend Developer",
};

const profileSlice = createSlice({
  name: "profile",

  initialState,

  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    updateRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
  },
});

export const { updateName, updateRole } = profileSlice.actions;

export default profileSlice.reducer;
