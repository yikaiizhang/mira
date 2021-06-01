import { useState, useEffect } from "react";
//debounce
// use closure and higher order function
// const debounce = (fn, timer) => {
//   let timeoutId;
//   return (...params) => {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       fn(...params);
//     }, timer);
//   };
// };

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  //useEffect 返回一个函数作为下一次执行的前缀就是因为闭包可以保留上一次渲染的状态
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};
