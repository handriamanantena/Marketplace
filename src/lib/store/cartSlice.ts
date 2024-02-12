import { createSlice } from "@reduxjs/toolkit";
import type { Item } from "@customTypes/Item";

export type ItemCart = Item & { quantity: number };

export interface CartState {
  items: ItemCart[];
}

const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem: ItemCart | undefined = state.items.find(
        (item: ItemCart) => item.id == action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const existingItem: ItemCart | undefined = state.items.find(
        (item) => item.id == action.payload.id,
      );
      if (existingItem) {
        const quantity = existingItem.quantity - action.payload.quantity;
        if (quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id != action.payload.id,
          );
        } else {
          existingItem.quantity = quantity;
        }
      }
    },
  },
});

export default CartSlice.reducer;
export const { addItem, removeItem } = CartSlice.actions;
