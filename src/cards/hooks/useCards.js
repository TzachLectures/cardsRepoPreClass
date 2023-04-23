<<<<<<< HEAD
import { useCallback, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";
=======
import { useCallback, useMemo, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import { useUser } from "../../users/providers/UserProvider";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";

<<<<<<< HEAD
const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useAxios();
  const snack = useSnackbar();
  const { user } = useUser();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setIsLoading(loading);
=======
export default function useCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [card, setCard] = useState(null);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

<<<<<<< HEAD
  const handleGetCards = async () => {
    try {
      setIsLoading(true);
=======
  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
      const cards = await getCards();
      requestStatus(false, null, cards);
      snack("success", "All the cards are here!");
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };
  const handleGetCard = async (cardId) => {
    try {
      setIsLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  };
  const handleGetMyCards = async () => {
    try {
      setIsLoading(true);
=======
  }, []);

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };

  const handleCreateCard = async (cardFromClient) => {
    try {
      setIsLoading(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleUpdateCard = async (cardId, cardFromClient) => {
    try {
      setIsLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setIsLoading(true);
      await deleteCard(cardId);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleLikeCard = async (cardId) => {
=======
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  //handleGetCard
  const handleGetCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleUpdateCard
  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleLikeCard
  const handleLikeCard = useCallback(async (cardId) => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    try {
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, cards, card);
      snack("success", "The business card has been Liked");
    } catch (error) {
      requestStatus(false, error, null);
    }
<<<<<<< HEAD
  };
  const handleGetFavCards = useCallback(async () => {
    try {
      setIsLoading(true);
=======
  }, []);
  //handleGetFavCards
  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user.id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);
<<<<<<< HEAD
  return {
    card,
    cards,
    isLoading,
    error,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleDeleteCard,
    handleCreateCard,
    handleUpdateCard,
    handleLikeCard,
    handleGetFavCards,
  };
};

export default useCards;
=======

  //handleCreateCard
  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(() => {
    return { isLoading, cards, card, error };
  }, [isLoading, cards, card, error]);

  return {
    value,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
    handleGetCard,
    handleUpdateCard,
    handleCreateCard,
    handleGetFavCards,
    handleLikeCard,
  };
}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
