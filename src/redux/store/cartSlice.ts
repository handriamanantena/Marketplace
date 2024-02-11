import {Item} from "~/model/Item";
import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";


export type ItemCart = Item & {quantity: number}


export interface CartState {
    items: Item[];
}

const initialState: CartState = {
    items: []
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemCart>) => {
            let existingItem : ItemCart = state.items.find(item => item.id == action.payload.id);
            if(existingItem) {
                existingItem.quantity += action.payload.quantity;
            }
            else {
                state.items.push(action.payload)
            }
        }
    }
});

export default CartSlice.reducer;
export const { addItem } = CartSlice.actions;

