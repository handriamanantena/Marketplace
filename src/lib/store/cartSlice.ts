import {createSlice} from "@reduxjs/toolkit";
import {Item} from "@customTypes/Item";


export type ItemCart = Item & {quantity: number}



export interface CartState {
    items: ItemCart[];
}

const initialState: CartState = {
    items: []
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            let existingItem : ItemCart | undefined = state.items.find(item => item.id == action.payload.id);
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

