import {Item} from "~/model/Item";
import {useRef} from "react";
import useClickOutside from "~/hooks/useClickOutside";


export default function CartMenu({items, setShowCart} : {items : Item[], setShowCart: (show: boolean) => {}}) {

    let ref = useRef(null);
    useClickOutside(setShowCart, ref);


    return <div className="overflow-y-scroll w-10 h-10" ref={ref}>
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
        <p>item</p>
    </div>

}