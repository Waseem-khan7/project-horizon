import type { Store } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "./store";

let appStore: Store<RootState> | null = null;

export const setStore = (store: Store<RootState>) => {
  appStore = store;
};

export const getStore = () => appStore;

export type { AppDispatch };
