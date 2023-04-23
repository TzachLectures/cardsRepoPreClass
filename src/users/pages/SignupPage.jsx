import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import UserForm from "../components/UserForm";
<<<<<<< HEAD
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import useUsers from "../hooks/useUsers";
=======
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/joi-schema/signupSchema";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import { useUser } from "../providers/UserProvider";

export default function SignupPage() {
  const { handleSignup } = useUsers();
<<<<<<< HEAD
  const user = useUser();
=======

>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );
<<<<<<< HEAD
=======

  const { user } = useUser();
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
<<<<<<< HEAD
        title="register form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        setData={rest.setData}
        errors={value.errors}
        data={value.data}
=======
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        title="register form"
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
      />
    </Container>
  );
}
