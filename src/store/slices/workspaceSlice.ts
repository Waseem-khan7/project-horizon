import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type WorkspaceState = {
  workspaceName: string;
};

const initialState: WorkspaceState = {
  workspaceName: "Horizon Workspace",
};

const workspaceSlice = createSlice({
  name: "workspace",

  initialState,

  reducers: {
    updateWorkspaceName(state, action: PayloadAction<string>) {
      state.workspaceName = action.payload;
    },
  },
});

export const { updateWorkspaceName } = workspaceSlice.actions;

export default workspaceSlice.reducer;
