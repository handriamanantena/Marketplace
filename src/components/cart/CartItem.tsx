import {addItem, ItemCart} from "@lib/store/cartSlice";
import Image from "next/image";
import {useAppDispatch} from "@lib/store/store";
import React from "react";

export default function CartItem({cartItem} : {cartItem: ItemCart}) {

    const dispatch = useAppDispatch();

    let addCart = () => {
        dispatch(addItem({ id: cartItem.id,
            url: cartItem.url,
            name: cartItem.name,
            price: cartItem.price,
            avgRating: cartItem.avgRating,
            totalRatings: cartItem.totalRatings,
            quantity: 1
        }));
    };

    return <div className="flex w-30 h-10"  onClick={addCart}>
        <Image className="md:rounded-lg w-5 h-5 mx-1 my-1" key={cartItem.id}
               alt={cartItem.name}
               width={1000}
               height={1000}
               src="https://thumbnail.r2pictures.uk/monkey"/>
        <p>{ cartItem.name }</p>
        <p>{ cartItem.quantity }</p>

    </div>

}