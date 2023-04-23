import { Grid, Typography } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import cardType from "../models/types/cardType";
import CardBussinesComponent from "./card/CardBussinesComponent";

<<<<<<< HEAD
export default function Cards({ cards, handleDelete, user_id }) {
=======
export default function Cards({ cards, handleDelete }) {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };
  const handleLike = (id) => {
    console.log(`Card ${id} is Liked`);
  };
<<<<<<< HEAD

=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  return (
    <>
      <Grid container spacing={2}>
        {cards?.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleLike={handleLike}
              user_id={card.user_id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
