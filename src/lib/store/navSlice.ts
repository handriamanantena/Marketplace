import {createSlice} from "@reduxjs/toolkit";


export interface NavBarState {
    showCart: boolean;
}

const initialState: NavBarState = {
    showCart: false
};

export const NavSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        showCart: (state) => {
            state.showCart = true;
        },
        hideCart: (state) => {
            state.showCart = false;
        }
    }
});

export default NavSlice.reducer;
export const { showCart, hideCart } = NavSlice.actions;