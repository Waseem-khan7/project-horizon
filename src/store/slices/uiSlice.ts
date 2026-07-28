import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type NotificationType = "success" | "error" | "warning" | "info";

type NotificationState = {
  visible: boolean;
  message: string;
  type: NotificationType;
};

type UIState = {
  sidebarOpen: boolean;

  notification: NotificationState;

  authExpired: boolean;

  accessDenied: boolean;
};

const initialState: UIState = {
  sidebarOpen: true,

  notification: {
    visible: false,
    message: "",
    type: "info",
  },

  authExpired: false,

  accessDenied: false,
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    // Sidebar
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

    openSidebar(state) {
      state.sidebarOpen = true;
    },

    closeSidebar(state) {
      state.sidebarOpen = false;
    },

    // Global Notifications
    showNotification(
      state,
      action: PayloadAction<{
        message: string;
        type: NotificationType;
      }>,
    ) {
      state.notification.visible = true;
      state.notification.message = action.payload.message;
      state.notification.type = action.payload.type;
    },

    hideNotification(state) {
      state.notification.visible = false;
      state.notification.message = "";
      state.notification.type = "info";
    },

    // Authentication
    setAuthExpired(state) {
      state.authExpired = true;
    },

    clearAuthExpired(state) {
      state.authExpired = false;
    },

    // Authorization
    setAccessDenied(state) {
      state.accessDenied = true;
    },

    clearAccessDenied(state) {
      state.accessDenied = false;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,

  showNotification,
  hideNotification,

  setAuthExpired,
  clearAuthExpired,

  setAccessDenied,
  clearAccessDenied,
} = uiSlice.actions;

export default uiSlice.reducer;
