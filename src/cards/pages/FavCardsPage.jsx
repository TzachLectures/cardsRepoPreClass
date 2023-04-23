import { useCallback } from "react";
import useCards from "./../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardFeedback from "../components/CardFeedback";

const FavCardsPage = () => {
  const { isLoading, error, cards, ...rest } = useCards();
  const { handleDeleteCard, handleGetFavCards } = rest;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite business cards"
      />

      <CardFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default FavCardsPage;
