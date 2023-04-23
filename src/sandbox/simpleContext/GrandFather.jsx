import React from "react";
import Father from "./Father";
import MyContext from "./MyContext";

export default function GrandFather() {
  return (
    <div>
      <MyContext>
        <Father />
      </MyContext>
    </div>
  );
}
