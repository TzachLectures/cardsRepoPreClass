<<<<<<< HEAD
import React, { useState, useContext, useCallback } from "react";
import { node } from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackbarContext = React.createContext(null);

export const SnackbarProvider = ({ children }) => {
  const [isSnackOpen, setOpenSnack] = useState(false);
  const [snackColor, setSnackColor] = useState("success");
  const [snackVariant, setSnackVariant] = useState("filled");
  const [snackMessage, setSnackMessage] = useState("in snackbar!");
=======
import { Alert, Snackbar } from "@mui/material";
import React, { createContext, useCallback, useContext, useState } from "react";

const SnackbarContext = createContext();

export default function SnackbarProvider({ children }) {
  const [isSnackOpen, setOpenSnack] = useState(false);
  const [snackColor, setSnackColor] = useState("success");
  const [snackVariant, setSnackVariant] = useState("filled");
  const [snackMessage, setSnackMessage] = useState("in snackbar");
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

  const setSnack = useCallback((color, message, variant = "filled") => {
    setOpenSnack(true);
    setSnackColor(color);
    setSnackVariant(variant);
    setSnackMessage(message);
  }, []);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSnackOpen}
        onClose={() => setOpenSnack((prev) => !prev)}
        autoHideDuration={5000}
      >
        <Alert severity={snackColor} variant={snackVariant}>
          {snackMessage}
        </Alert>
      </Snackbar>
<<<<<<< HEAD

=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
      <SnackbarContext.Provider value={setSnack}>
        {children}
      </SnackbarContext.Provider>
    </>
  );
<<<<<<< HEAD
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context)
    throw new Error("useSnackbar must be used within a NameProvider");
  return context;
};

SnackbarProvider.propTypes = {
  children: node.isRequired,
};
=======
}

export const useSnack = () => {
  const context = useContext(SnackbarContext);
  if (!context) throw Error("useSnackbar must be used within a NameProvider");
  return context;
};
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
