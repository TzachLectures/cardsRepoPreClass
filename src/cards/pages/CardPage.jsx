import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import Error from "../../components/Error";
=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import PageHeader from "../../components/PageHeader";
import Spinner from "../../components/Spinner";
import CardFeedback from "../components/CardFeedback";
import Cards from "../components/Cards";
<<<<<<< HEAD
import useCards from "../hooks/useCards";
import { getCards } from "../services/cardApiService";

export default function CardPage() {
  // const [cards, setCards] = useState();
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const { isLoading, error, cards, handleGetCards, handleDeleteCard } =
    useCards();
  useEffect(() => {
    // setIsLoading(true);
    // getCards()
    //   .then((data) => {
    //     setCards(data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     setError(err);
    //     console.log(err);
    //   });
    handleGetCards();
  }, []);
  const handleDelete = async (cardId) => {
    await handleDeleteCard(cardId);
=======
import Spinner from "./../../components/Spinner";
import Error from "./../../components/Error";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";

export default function CardPage() {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { cards, error, isLoading } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    handleGetCards();
  };
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
<<<<<<< HEAD
        <CardFeedback
          cards={cards}
          isLoading={isLoading}
          error={error}
          onDelete={handleDelete}
=======
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={cards}
          handleDelete={handleDelete}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
        />
      </Container>
    </div>
  );
}
