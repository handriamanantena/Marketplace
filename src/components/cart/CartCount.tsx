import {CartSVG} from "@components/cart/CartSVG";
import {ItemCart} from "@lib/store/cartSlice";

export default function CartCount({cartItem} : {cartItem: ItemCart}) {

    return cartItem ? <div className="relative top-12 left-1 rounded-full bg-cyan-900 text-white w-14 h-14 flex justify-center items-center">
        <div className="w-5 h-5 flex justify-center items-center">
            <CartSVG/>
        </div>
        <div className="absolute text-black top-8 left-8 rounded-full text-white bg-white w-8 h-8 flex justify-center items-center">
            <p className="">
                {cartItem.quantity}
            </p>
        </div>
    </div> : <></>

}