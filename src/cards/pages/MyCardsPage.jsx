import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardFeedback from "../components/CardFeedback";
import useCards from "../hooks/useCards";

export default function MyCardsPage() {
  const { cards, isLoading, error, handleGetMyCards, handleDeleteCard } =
    useCards();
  const { user } = useUser();
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!user) navigate(ROUTES.CARDS);
    else handleGetMyCards();
  }, [user]);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetMyCards();
  };
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find your cards"
        />
        <CardFeedback
          cards={cards}
          isLoading={isLoading}
          error={error}
          onDelete={onDeleteCard}
        />
      </Container>
    </div>
  );
}
