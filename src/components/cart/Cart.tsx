import { useRef } from "react";
import useClickOutside from "@hooks/useClickOutside";
import { useAppSelector } from "@lib/store/store";
import type { ItemCart } from "@lib/store/cartSlice";
import React from "react";
import CartItem from "@components/cart/CartItem";
import { hideCart } from "@lib/store/navSlice";
import { useAppDispatch } from "@lib/store/store";

export default function CartMenu() {
  const ref: React.RefObject<HTMLDivElement> = useRef(null);
  const dispatch = useAppDispatch();
  const dispatchHide = () => {
    dispatch(hideCart());
  };
  useClickOutside(ref, dispatchHide);
  const items: ItemCart[] | undefined = useAppSelector(
    (state) => state.cart.items,
  );

  return (
    <div
      className="absolute overflow-y-scroll w-80 min-h-40 bg-white grow z-40"
      ref={ref}
    >
      {items == undefined || items.length == 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item) => {
          return <CartItem cartItem={item} key={item.id} />;
        })
      )}
    </div>
  );
}
