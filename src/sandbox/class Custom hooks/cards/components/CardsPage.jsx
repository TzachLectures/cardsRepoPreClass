import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./../../../../cards/components/Cards";
import Spinner from "./../../../../components/Spinner";
import Error from "./../../../../components/Error";

export default function CardsPage() {
  const apiUrl = "http://localhost:8181";
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState(null);

  const getCards = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/cards`);
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      setLoading(false);
      setCards(cards);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {cards && <Cards cards={cards} />}
    </>
  );
}
