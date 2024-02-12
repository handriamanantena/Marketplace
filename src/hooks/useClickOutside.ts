import { useEffect } from "react";
import type React from "react";
import { hideCart } from "@lib/store/navSlice";
import { useAppDispatch } from "@lib/store/store";

const useClickOutside = (ref: React.RefObject<HTMLElement>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleAnyDropDownClick(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(hideCart());
      }
    }
    document.addEventListener("click", handleAnyDropDownClick, {
      capture: true,
    });
    return () => {
      document.removeEventListener("click", handleAnyDropDownClick, {
        capture: true,
      });
    };
  }, []);
};

export default useClickOutside;
