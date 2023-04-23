import { TextField } from "@mui/material";
import React, { useCallback, useMemo, useRef, useState } from "react";
import MyButton from "./MyButton";
import AbcIcon from "@mui/icons-material/Abc";
import MyComp from "./MyComp";
export default function ShowData() {
  const first = useRef();
  const second = useRef();
  const [counter, setCounter] = useState(0);
  const showData = useCallback(() => {
    console.log(first.current.value);
    console.log(second.current.value);
  }, []);
  const showDataInCapital = useCallback(() => {
    console.log(first.current.value.toUpperCase());
    console.log(second.current.value.toUpperCase());
    setCounter((prev) => prev + 1);
  }, []);

  const abcIcon = useMemo(() => {
    return <AbcIcon />;
  }, []);

  return (
    <div>
      <TextField type="text" inputRef={first} />
      <TextField type="text" inputRef={second} />
      <MyButton handleClick={showData} node={"display"} />
      <MyButton handleClick={showDataInCapital} node={abcIcon} />
      <MyComp text={"hell11o"} />
      <p>{counter}</p>
    </div>
  );
}
