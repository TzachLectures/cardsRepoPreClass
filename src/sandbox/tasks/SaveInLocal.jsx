import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import ShowFromLocal from "./ShowFromLocal";

export default function SaveInLocal() {
  const [dataState, setDataState] = useState();
  const [toggle, setToggle] = useState(false);

  //const data = useRef();

  const handleClick = () => {
    setToggle((prev) => !prev);
    localStorage.setItem("data", JSON.stringify(dataState));
  };

  return (
    <div>
      <TextField onChange={(e) => setDataState(e.target.value)} />
      <Button onClick={handleClick}>Click</Button>
      <ShowFromLocal toggle={toggle} />
    </div>
  );
}
