import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ProjectState = {
  search: string;
};

const initialState: ProjectState = {
  search: "",
};

const projectSlice = createSlice({
  name: "projects",

  initialState,

  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = projectSlice.actions;

export default projectSlice.reducer;
