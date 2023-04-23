import { node } from "prop-types";
<<<<<<< HEAD
import Paper from "@mui/material/Paper";
import { useTheme } from "../../providers/ThemeProvider";

const Main = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: isDark ? "#333333" : "#e3f2fd",
      }}
    >
      {children}
    </Paper>
=======
import React from "react";
import { useTheme } from "../../providers/ThemeProvider";

export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <>
      <Box
        sx={{
          minHeight: "85vh",
          backgroundColor: isDark ? "#333333" : "#e3f2fd",
        }}
      >
        {children}
      </Box>
    </>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  );
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
