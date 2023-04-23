<<<<<<< HEAD
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyForm2() {
  const INITIAL_FORM = {
    email: "",
    password: "",
  };

  const schema = {
    email: Joi.string().max(10),
    password: Joi.string().min(3).max(8),
=======
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function MyForm2() {
  const INITIAL_FORM = {
    firstName: "",
    lastName: "",
  };
  const schema = {
    firstName: Joi.string().max(10),
    lastName: Joi.string().min(2).max(10),
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  };

  const [data, setData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
<<<<<<< HEAD

=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
    const errorMessage = validateProperty(target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [target.name]: "" }));
    }
  };

  const handleReset = () => {
    setData(INITIAL_FORM);
  };

  const handleCancel = (to) => {
    navigate(to);
  };

  const validateProperty = (target) => {
    const obj = { [target.name]: target.value };
<<<<<<< HEAD
    const schemaObj = Joi.object({ [target.name]: schema[target.name] });
    const { error } = schemaObj.validate(obj);
=======
    const joiObj = Joi.object({ [target.name]: schema[target.name] });
    const { error } = joiObj.validate(obj);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    return error ? error.details[0].message : null;
  };

  const validateForm = () => {
    const schemaObj = Joi.object(schema);
    const { error } = schemaObj.validate(data);
<<<<<<< HEAD
    return error ? error : null;
  };

  console.log(data);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hey");
=======
    return error ? true : false;
  };

  console.log(errors);
  return (
    <>
      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
        }}
      >
        <Typography>My Form</Typography>
        <Box>
          <TextField
<<<<<<< HEAD
            label="Email"
            type={"email"}
            name="email"
            onChange={handleChange}
            value={data["email"] ? data["email"] : ""}
            error={Boolean(errors["email"])}
            helperText={errors["email"]}
          />
          <TextField
            label="Password"
            type={"password"}
            name="password"
            onChange={handleChange}
            value={data["password"] ? data["password"] : ""}
            error={Boolean(errors["password"])}
            helperText={errors["password"]}
          />
        </Box>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={() => handleCancel("/")}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </Box>
    </Container>
=======
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={data["firstName"] ? data["firstName"] : ""}
            helperText={errors["firstName"]}
            error={Boolean(errors["firstName"])}
          />
          <TextField
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data["lastName"] ? data["lastName"] : ""}
            helperText={errors["lastName"]}
            error={Boolean(errors["lastName"])}
          />
        </Box>
        <Box>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={() => handleCancel("/")}>Cancel</Button>
          <Button type="submit" disabled={validateForm()}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  );
}
