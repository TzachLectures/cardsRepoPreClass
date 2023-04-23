import { Button } from "@mui/material";
import React, { memo } from "react";

export default memo(function MyButton({ node, handleClick }) {
  console.log("button " + node);
  return (
    <>
      <Button onClick={handleClick}>{node}</Button>
    </>
  );
});
