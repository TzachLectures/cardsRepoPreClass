import React, { memo } from "react";

export default memo(function SonOfRender({ children, handleClick }) {
  console.log("Component son of render " + children);
  return <button onClick={handleClick}>{children}</button>;
});
