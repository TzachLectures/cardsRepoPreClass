<<<<<<< HEAD
import React, { useState, useContext, useEffect, useMemo } from "react";
import { node } from "prop-types";
import { getToken, getUser } from "../services/localStorageService";

const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken);
=======
import { node } from "prop-types";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getToken, getUser } from "../services/localStorageService";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken());
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, setUser, token, setToken }),
    [user, token]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
<<<<<<< HEAD
};
=======
}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a NameProvider");
  return context;
};

UserProvider.propTypes = {
  children: node.isRequired,
};
