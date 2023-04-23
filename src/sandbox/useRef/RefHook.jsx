import React, { useRef } from "react";

export default function RefHook() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
