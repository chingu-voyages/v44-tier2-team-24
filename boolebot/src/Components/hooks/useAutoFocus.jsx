import { useRef, useEffect } from "react";



const useAutoFocus = (botsArr) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [botsArr]);

  return inputRef;
};

export default useAutoFocus;