import React, { useContext } from "react";
import { MyCon } from "../../App";
import { useMyData } from "./MyContext";

export default function Son() {
  const myData = useMyData();
  console.log(myData);
  const myCon = useContext(MyCon);
  console.log(myCon);
  return <div></div>;
}
