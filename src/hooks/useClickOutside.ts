import {Dispatch, RefObject, SetStateAction, useEffect} from "react";
import React from "react";

const useClickOutside = (setShowClickable: Dispatch<SetStateAction<boolean>>, ref : React.RefObject<HTMLElement>) => {


    useEffect(() => {
        function handleAnyDropDownClick(event : any) {
            console.log("inside");
            if (ref.current && !ref.current.contains(event.target)) {
                setShowClickable(false);
            }
        }
        document.addEventListener("click", handleAnyDropDownClick, {capture: true});
        return () => {
            document.removeEventListener("click", handleAnyDropDownClick, {capture: true});
        };
    }, []);
}

export default useClickOutside;
