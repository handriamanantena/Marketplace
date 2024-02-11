import CartMenu from "~/components/cart/Cart";
import {useState} from "react";

export default function NavBar({}) {

    let [showCart, setShowCart] = useState<boolean>(false);


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
                <button onClick={setShowCart}>Cart</button>
                {showCart ? <CartMenu items={[]} setShowCart={setShowCart}/> : <></>}
            </div>
        </div>
    </nav>
}