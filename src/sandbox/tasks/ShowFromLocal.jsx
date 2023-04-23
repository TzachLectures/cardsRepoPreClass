import React, { memo, useEffect, useState } from "react";

export default memo(function ShowFromLocal({ toggle }) {
  console.log(toggle);
  const [data, setData] = useState();
  useEffect(() => {
    let savedData = localStorage.getItem("data");
    setData(savedData);
  }, [toggle]);
  return (
    <div>
      <h1>The data is:</h1>
      <p>{data}</p>
    </div>
  );
});
