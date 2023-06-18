import { useEffect, useState } from "react";

export const useDebouncedValue = <T>(value: T, timeout: number) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), timeout);
    return () => clearTimeout(timer);
  }, [value]);

  return debounced;
};
