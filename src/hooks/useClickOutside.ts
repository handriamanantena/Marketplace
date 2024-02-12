import { useEffect } from "react";
import type React from "react";

const useClickOutside = (ref: React.RefObject<HTMLElement>, callback) => {
  useEffect(() => {
    function handleAnyDropDownClick(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
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
