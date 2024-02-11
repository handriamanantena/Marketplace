import {Item} from "@customTypes/Item";
import {Dispatch, SetStateAction, useRef} from "react";
import useClickOutside from "@hooks/useClickOutside";
import {useAppDispatch} from "@lib/store/store";
import {addItem} from "@lib/store/cartSlice";
import React from "react";

export default function CartMenu({items, setShowCart} : {items : Item[], setShowCart: Dispatch<SetStateAction<boolean>>}) {

    let ref: React.RefObject<HTMLDivElement> = useRef(null);
    useClickOutside(setShowCart, ref);
    const dispatch = useAppDispatch();

    let addCart = () => {
        dispatch(addItem({ id: 1,
            url: "url",
            name: "name",
            price: 1,
            avgRating: 1,
            totalRatings: 1,
            quantity: 1
        }));
    };

    return <div className="absolute overflow-y-scroll w-30 h-30 bg-white grow" ref={ref} onClick={addCart}>
        <p>iteasdfasdfdm</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>

    </div>

}