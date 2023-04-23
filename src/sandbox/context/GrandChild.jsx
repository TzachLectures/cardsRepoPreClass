<<<<<<< HEAD
import React, { useContext } from "react";
import { MyContext, useData } from "./DataProvider";

export default function GrandChild() {
  const data = useData();
  console.log(data);
  return <div>Hello</div>;
=======
import React from "react";
import { useData } from "./DataProvider";

export default function GrandChild() {
  let data = useData();
  return <div>{JSON.stringify(data)}</div>;
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
}
