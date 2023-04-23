import React, { createContext, useContext } from "react";

export const myContext = createContext();

export default function MyContext({ children }) {
  //קומפוננטת הפרוביידר שלי
  return (
    <myContext.Provider value={{ data: 100 }}>{children}</myContext.Provider>
  );
}

export const useMyData = () => {
  const myData = useContext(myContext);
  if (!myData) throw Error("useData must be used within a NameProvider");
  return myData;
}; //הוק שיעזור לי להשתמש בקונטקסט
