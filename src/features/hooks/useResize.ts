import { useEffect, useRef, useState } from "react";

const useResize = (ref: React.RefObject<HTMLElement>, data: object) => {
  const [resize, setResize] = useState<{ height?: number; width?: number }>({
    height: 0,
    width: 0,
  });

  const resizeHandler = () => {
    if (ref.current) {
      setResize({
        height: ref.current.offsetHeight,
        width: ref.current.offsetWidth,
      });
    }
  };

  const handleResize = () => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  useEffect(() => {
    resizeHandler();
    handleResize();
  }, [data]);

  return {
    resize,
  };
};

export default useResize;
