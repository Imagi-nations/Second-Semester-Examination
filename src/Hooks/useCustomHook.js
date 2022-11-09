import {  useState,react} from "react";
function useCustomHook(initialValue) {
  let [value, setValue] = useState(initialValue||0);

  const handleDecrement = () => setValue((x) => x-1);

  const handleIncrement = () => setValue( (x) => x + 1);

  const handleReset = () => setValue(initialValue|| 0);
  return [value, setValue, handleDecrement, handleIncrement, handleReset];
}

export default useCustomHook;
