import {Dispatch, SetStateAction, useEffect} from "react";

const useClickOutside = (setShowClickable: Dispatch<SetStateAction<boolean>>, ref) => {


    useEffect(() => {
        function handleAnyDropDownClick(event) {
            console.log("inside");
            if (!ref.current.contains(event.target)) {
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
