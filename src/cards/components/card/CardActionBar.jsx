import { Box, CardActions, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
<<<<<<< HEAD
import useCards from "../../hooks/useCards";
=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

export default function CardActionBar({
  handleDelete,
  handleEdit,
  handleLike,
  id,
  user_id,
<<<<<<< HEAD
  cardLikes, //
}) {
  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setLiked] = useState(() => cardLikes?.includes(user.id)); //
  const navigate = useNavigate();
  const { handleLikeCard } = useCards(); //

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    handleDelete(id);
  };

  const onLike = async () => {
    setLiked((prev) => !prev);
    await handleLikeCard(id);
    handleLike(id);
  };
=======
}) {
  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);
  const navigate = useNavigate();
  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  };

>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id == user_id ? (
            <>
              <IconButton
                aria-label="Delete Card"
<<<<<<< HEAD
                onClick={() => handleDialog("open")}
              >
                <DeleteIcon />
              </IconButton>

=======
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
              <IconButton
                aria-label="Edit Card"
                onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
              >
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>

        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (
<<<<<<< HEAD
            <IconButton aria-label="Add to favorite" onClick={() => onLike(id)}>
              <FavoriteIcon color={isLiked ? "error" : "inherit"} />
=======
            <IconButton
              aria-label="Add to favorite"
              onClick={() => handleLike(id)}
            >
              <FavoriteIcon />
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
<<<<<<< HEAD
        onChangeDialog={handleDialog}
=======
        onChangeDialog={() => setDialog(false)}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
        onDelete={handleDeleteCard}
      />
    </>
  );
}

CardActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  handleLike: func.isRequired,
  id: string.isRequired,
};
