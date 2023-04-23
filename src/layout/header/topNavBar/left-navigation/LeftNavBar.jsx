import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";

export default function LeftNavBar() {
  const { user } = useUser();
<<<<<<< HEAD
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.CARDS} label="Cards" />
      <NavItem to={ROUTES.ABOUT} label="About" />
      {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorites" />}
      {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My cards" />}
      {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
=======
  console.log(user);
  return (
    <Box>
      <LogoIcon />

      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        <Logo />
        <NavItem to={ROUTES.CARDS} label="Cards" />
        <NavItem to={ROUTES.ABOUT} label="About" />
        {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite cards" />}
        {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My cards" />}
        {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
      </Box>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    </Box>
  );
}
