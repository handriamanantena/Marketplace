import {Item} from "~/model/Item";
import {useRef} from "react";
import useClickOutside from "~/hooks/useClickOutside";
import {useAppDispatch} from "~/redux/store/store";
import {addItem} from "~/redux/store/cartSlice";

export default function CartMenu({items, setShowCart} : {items : Item[], setShowCart: (show: boolean) => {}}) {


    let ref = useRef(null);
    useClickOutside(setShowCart, ref);
    const dispatch = useAppDispatch();

    let addCart = (e) => {
        console.log("clicked cart");
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