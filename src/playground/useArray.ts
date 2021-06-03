import { useState } from "react";

export const useArray = <T>(arr: Array<T>) => {
  const [newArr, setNewArr] = useState(arr);

  const add = (params: T) => {
    // Array.prototype.push.call(newArr, params);
    const result = [...newArr, params];
    setNewArr(result);
  };

  const removeIndex = (index: number) => {
    const clone = [...newArr];
    clone.splice(index, 1);
    setNewArr(clone);
    // Array.prototype.splice.call(newArr, index, 1);
  };

  const clear = () => {
    setNewArr([]);
  };

  return { add, removeIndex, clear, value: newArr };
};
