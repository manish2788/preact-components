import { memo } from "preact/compat";
import { useRef, useState } from "preact/hooks"


export default memo(function Input({onChangeCallback}) {
  console.log("Input Loaded!!");
  const inputRef = useRef();

  function handleValueChange() {
    onChangeCallback(inputRef.current.value);
  }
  return (<>
    <input type="text" onInput={handleValueChange} ref={inputRef} />
  </>)
});