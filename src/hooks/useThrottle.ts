import { useEffect, useRef, useState } from "react";

function useThrottle<T>(value: T, delay = 400): T {
  const [throttledValue, setThrottledValue] = useState(value);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setThrottledValue(value);
      timeoutRef.current = null;
    }, delay);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle;
