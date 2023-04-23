import { Container } from "@mui/material";
import React, { useEffect } from "react";
<<<<<<< HEAD
import { Navigate, useNavigate, useParams } from "react-router-dom";
=======
import { Navigate, useParams } from "react-router-dom";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import mapCardToModel from "../helpers/normalization/mapToModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";

export default function EditCardPage() {
<<<<<<< HEAD
  const { id } = useParams();
  const { handleUpdateCard, handleGetCard, card } = useCards();
  const { user } = useUser();
  const navigate = useNavigate();
  const { value, ...rest } = useForm(initialCardForm, cardSchema, () =>
=======
  //what do we need in this page
  //id of the card - useParams
  const { id } = useParams();
  //handleUpdateCard & handleGetCard & card - useCards
  const {
    handleUpdateCard,
    handleGetCard,
    value: { card },
  } = useCards();

  //user - useUser (provider)
  const { user } = useUser();
  //useForm (initialForm,schema,onSubmit)
  const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    handleUpdateCard(card._id, {
      ...normalizeCard({ ...value.data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
<<<<<<< HEAD
    })
  );
  useEffect(() => {
    handleGetCard(id).then((data) => {
      if (user.id !== data.user_id) return navigate(ROUTES.CARDS);
      const modeledCard = mapCardToModel(data);
      rest.setData(modeledCard);
=======
    });
  });
  //useEffect - update the form data to this card data
  useEffect(() => {
    handleGetCard(id).then((data) => {
      const modelCard = mapCardToModel(data);
      rest.setData(modelCard);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    });
  }, []);
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="edit card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
}
