import { CartSVG } from "@components/cart/CartSVG";
import { useAppDispatch } from "@lib/store/store";
import { showCart } from "@lib/store/navSlice";
import type { ItemCart } from "@lib/store/cartSlice";

export default function CartCount({ cartItem }: { cartItem: ItemCart }) {
  const dispatch = useAppDispatch();

  const dispatchAction = () => {
    dispatch(showCart());
  };

  return cartItem ? (
    <div className="relative" onClick={dispatchAction}>
      <button className="absolute top-1 left-1 rounded-full bg-cyan-900 text-white w-14 h-14 flex justify-center items-center hover:bg-sky-700">
        <span className="w-5 h-5 flex justify-center items-center">
          <CartSVG />
        </span>
        <span className="absolute text-black top-8 left-8 rounded-full text-black bg-white w-8 h-8 flex justify-center items-center">
          <p className="">{cartItem.quantity}</p>
        </span>
      </button>
    </div>
  ) : (
    <></>
  );
}
