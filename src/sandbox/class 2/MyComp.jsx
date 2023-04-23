import { Typography } from "@mui/material";
import React, { memo } from "react";

export default memo(function MyComp({ text }) {
  console.log("MyComp is render");
  return (
    <div>
      <Typography>{text}</Typography>
    </div>
  );
});
