import {Item} from "@customTypes/Item";
import {Dispatch, SetStateAction, useRef} from "react";
import useClickOutside from "@hooks/useClickOutside";
import { useAppSelector} from "@lib/store/store";
import { ItemCart } from "@lib/store/cartSlice";
import React from "react";
import CartItem from "@components/cart/CartItem";

export default function CartMenu({setShowCart} : {setShowCart: Dispatch<SetStateAction<boolean>>}) {

    let ref: React.RefObject<HTMLDivElement> = useRef(null);
    useClickOutside(setShowCart, ref);
    let items : ItemCart[] | undefined = useAppSelector(state => state.cart.items);


    return <div className="absolute overflow-y-scroll w-80 min-h-40 bg-white grow z-40" ref={ref}>
        {items == undefined || items.length == 0 ? <p>Cart is empty</p> : items.map(item => {
            return <CartItem cartItem={item}/>
        })}
    </div>

}