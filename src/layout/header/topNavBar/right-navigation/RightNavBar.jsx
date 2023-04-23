<<<<<<< HEAD
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreButton from "./MoreButton";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";

const RightNavBar = () => {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged />}
      </Box>

      <MoreButton />
    </>
  );
};

export default RightNavBar;
=======
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import MoreButton from "./MoreButton";
import NotLogged from "./NotLogged";

export default function RightNavBar() {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton />
    </>
  );
}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
