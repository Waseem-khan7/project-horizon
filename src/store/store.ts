import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import profileReducer from "./slices/profileSlice";
import projectReducer from "./slices/projectSlice";
import workspaceReducer from "./slices/workspaceSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    profile: profileReducer,
    projects: projectReducer,
    workspace: workspaceReducer,
  },

  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
