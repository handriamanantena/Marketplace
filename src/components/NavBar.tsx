import CartMenu from "@components/cart/Cart";
import {CartSVG} from "@components/cart/CartSVG";
import {useAppDispatch, useAppSelector} from "@lib/store/store";
import {showCart} from "@lib/store/navSlice";

export default function NavBar({}) {


    const showCartState : boolean = useAppSelector(state => state.nav.showCart);
    const dispatch = useAppDispatch();

    const dispatchShowCart = () => {
        dispatch(showCart());
    }


    return <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <a href="#" className="text-white font-semibold text-lg mr-4">Logo</a>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
            </div>
            <div className="flex-row-reverse" >
                <button className="text-white" onClick={() => dispatchShowCart()}>
                    <CartSVG/>
                    Cart
                </button>
                { showCartState ? <CartMenu/> : <></>}
            </div>
        </div>
    </nav>
}