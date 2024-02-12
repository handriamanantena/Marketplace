import { addItem, removeItem } from "@lib/store/cartSlice";
import type { ItemCart } from "@lib/store/cartSlice";
import Image from "next/image";
import { useAppDispatch } from "@lib/store/store";
import React from "react";
import QuantityButton from "@components/button/QuantityButton";

export default function CartItem({ cartItem }: { cartItem: ItemCart }) {
  const dispatch = useAppDispatch();

  const increaseItemQuantity = () => {
    dispatch(
      addItem({
        id: cartItem.id,
        url: cartItem.url,
        name: cartItem.name,
        price: cartItem.price,
        avgRating: cartItem.avgRating,
        totalRatings: cartItem.totalRatings,
        quantity: 1,
      }),
    );
  };

  const decreaseItemQuantity = () => {
    dispatch(
      removeItem({
        id: cartItem.id,
        url: cartItem.url,
        name: cartItem.name,
        price: cartItem.price,
        avgRating: cartItem.avgRating,
        totalRatings: cartItem.totalRatings,
        quantity: 1,
      }),
    );
  };

  return (
    <div className="flex justify-center items-center w-30 h-20 m-1 space-x-5">
      <Image
        className="md:rounded-lg w-10 h-10 mx-1 my-1"
        key={cartItem.id}
        alt={cartItem.name}
        width={1000}
        height={1000}
        src="https://thumbnail.r2pictures.uk/monkey"
      />
      <p>{cartItem.name}</p>

      <QuantityButton changeCallBack={decreaseItemQuantity} text="-" />
      <p>{cartItem.quantity}</p>
      <QuantityButton changeCallBack={increaseItemQuantity} text="+" />
    </div>
  );
}
