import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "@lib/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { NavSlice } from "@lib/store/navSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    nav: NavSlice.reducer,
  },
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
