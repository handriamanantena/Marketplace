import Image from "next/image";
import { Rating } from "@components/rating/Rating";
import { useState } from "react";
import type { Item } from "prisma/prisma-client";
import { addItem } from "@lib/store/cartSlice";
import type { ItemCart } from "@lib/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@lib/store/store";
import CartCount from "@components/cart/CartCount";
import { DialogCloseButton } from "@components/AddReviewModal";
import { Button } from "@components/ui/button";
import { DialogTrigger } from "./ui/dialog";

export const Card = ({ item }: { item: Item }) => {
  const [showPopup, setShowPop] = useState(false);
  const itemInCart: ItemCart | undefined = useAppSelector((state) =>
    state.cart.items.find((cartItem) => cartItem.id == item.id),
  );
  const dispatch = useAppDispatch();

  const addToCart = () => {
    const itemCart: ItemCart = { ...item, ...{ quantity: 1 } };
    dispatch(addItem(itemCart));
  };
  return (
    <div className="bg-slate-100 border-2 pb-5 m-5">
      <CartCount cartItem={itemInCart} />
      <Image
        className="md:rounded-lg w-80 h-80 mx-5 my-5"
        key={item.id}
        alt={item.name}
        width={1000}
        height={1000}
        src={item.url}
      ></Image>

      <div className="flex justify-center items-center space-y-1 flex-col">
        <p>{item.name}</p>
        <p>{item.price.toFixed(2)}$</p>
        <Rating
          rating={item.avgRating}
          totalRatings={item.totalRatings}
        ></Rating>
        <div className="flex space-x-1">
          <DialogCloseButton itemId={item.id} />
          <Button variant="outline" onClick={addToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
