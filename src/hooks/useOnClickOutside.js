import React, { useEffect } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;

// usage
// const ref = useRef(null);
// const [isOpen, setIsOpen] = useState(false);
// useOnClickOutside(ref, () => setIsOpen(false));

// return {isOpen && (<div ref={ref}>foo</div>)}
