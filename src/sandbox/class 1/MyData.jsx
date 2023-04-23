import { Button, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import MySpecificData from "./MySpecificData";

export default function MyData() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const data = useMemo(
    () => ({
      text: "hello",
    }),
    []
  );

  const doSomething = () => {
    return "something";
  };

  return (
    <div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Typography>{counter}</Typography>
      <MySpecificData text={"hello"} data={data} cl={doSomething} />
      <MySpecificData text={"bye"} />
    </div>
  );
}
