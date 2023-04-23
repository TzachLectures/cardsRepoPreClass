import React, { useCallback, useEffect, useMemo, useState } from "react";
import SonOfRender from "./SonOfRender";

export default function Render() {
  const [value, setValue] = useState(() => {
    console.log("state function");
    return 0;
  });

  const [value2, setValue2] = useState(0);
  console.log("Component is re rendered");

  useEffect(() => {
    console.log("The useEffect is re render");
  }, []);

  const doSomethingLong = useMemo(() => {
    console.log("long function is runing");
    return value2 * 2;
  }, [value2]);

  const handleClick1 = useCallback(() => setValue((prev) => prev + 1), []);
  const handleClick2 = useCallback(() => setValue2((prev) => prev + 1), []);

  return (
    <div>
      <h1>{value}</h1>

      <SonOfRender handleClick={handleClick1}>+</SonOfRender>

      <h1>{value2}</h1>
      <SonOfRender handleClick={handleClick2}>+++++++</SonOfRender>

      <h1>{doSomethingLong}</h1>
    </div>
  );
}
