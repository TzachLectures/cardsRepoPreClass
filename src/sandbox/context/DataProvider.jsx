import React, { createContext, useContext } from "react";
<<<<<<< HEAD
const MyContext = createContext();

export default function DataProvider({ children }) {
  const myData = { data1: 100, data2: 200 };
  return <MyContext.Provider value={myData}>{children}</MyContext.Provider>;
=======

const MyContext = createContext();

export default function DataProvider({ children }) {
  const data = { data1: 100, data2: 200 };
  return <MyContext.Provider value={data}> {children}</MyContext.Provider>;
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
}

export const useData = () => {
  const context = useContext(MyContext);
  if (!context) throw new Error("useData must be used within a NameProvider");
  return context;
};
