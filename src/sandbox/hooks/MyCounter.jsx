import { Button, Typography } from "@mui/material";
import React from "react";
import { useCounter } from "./useCounter";

export default function MyCounter() {
  const { count, increment, decrement, reset } = useCounter(5, 3);
  return (
    <>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>reset</Button>
      <Typography>{count}</Typography>
    </>
  );
}
