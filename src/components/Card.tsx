import Image from 'next/image'
import {Rating} from "@components/rating/Rating";
import {AddReview} from "@components/AddReview";
import { useState} from "react";
import {Item} from "@customTypes/Item";
import {addItem, ItemCart} from "@lib/store/cartSlice";
import {useAppDispatch, useAppSelector} from "@lib/store/store";
import CartCount from "@components/cart/CartCount";

export const Card =  ({item} : {item: Item}) => {

    let [showPopup, setShowPop] = useState(false);
    let itemInCart : ItemCart | undefined = useAppSelector(state => state.cart.items.find(cartItem => cartItem.id == item.id));
    const dispatch = useAppDispatch();

    const addToCart = () => {
        let itemCart : ItemCart = { ...item, ...{quantity: 1} };
        dispatch(addItem(itemCart));
    };
    return <div>
        <AddReview showPopup={showPopup} setShowPop={ setShowPop } itemId={item.id}/>
        <div>
            <CartCount cartItem={itemInCart}/>
            <Image className="md:rounded-lg w-80 h-80 mx-5 my-5" key={item.id}
                   alt={item.name}
                   width={1000}
                   height={1000}
                   src="https://thumbnail.r2pictures.uk/monkey">
            </Image>
        </div>

        <div className="flex flex-col">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.avgRating}</p>
            <Rating rating={item.avgRating} totalRatings={item.totalRatings}></Rating>
            <button onClick={() => setShowPop}>Add Review</button>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    </div>


}