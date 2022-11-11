import {  useState} from "react";
function useCustomHook(initialValue) {
  let [value, setValue] = useState(initialValue||0);

  const handleDecrement =  () => setValue((x) => x-1);
  const handleIncrement = () => setValue( (x) => x + 1);
  const handleReset = () => setValue(initialValue|| 0);
  const participantId = () => setValue( (x) => x + Math.floor(Math.random()*1000001));
  return [value, setValue, handleDecrement, handleIncrement, handleReset, participantId];
}

export default useCustomHook;
