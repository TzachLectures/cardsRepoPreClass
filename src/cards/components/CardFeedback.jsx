import { Typography } from "@mui/material";
import React from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";

export default function CardFeedback({ isLoading, error, cards, onDelete }) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length == 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (cards) return <Cards cards={cards} handleDelete={onDelete} />;
  return null;
}
