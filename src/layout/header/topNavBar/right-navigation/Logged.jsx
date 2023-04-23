import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../menu/MenuProvider";

const Logged = () => {
  const setOpen = useMenu();
<<<<<<< HEAD

=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setOpen(true)}
      >
        <Avatar alt="Bird" src="/assets/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;
