import { Typography } from "@mui/material";
import React, { memo } from "react";

export default memo(function MySpecificData({ text, data, cl }) {
  if (cl) {
    console.log(cl());
  }
  let result = data ? data.text : text;
  //console.log("component " + result);
  return <Typography>{text}</Typography>;
});
