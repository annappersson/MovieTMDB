import { useState } from "react";

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const value = window.localStorage.getItem(key);

    return value !== null ? JSON.parse(value) : defaultValue;
  });

  const setValue = (newValue: T) => {
    setStoredValue(newValue);

    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
