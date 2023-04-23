<<<<<<< HEAD
import { Box, Button, TextField, Typography } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyForm() {
  const INITIAL_FORM = {
    email: "",
    password: "",
  };

  const schema = {
    email: Joi.string()
      .regex(/^([A-Za-z0-9]+)@([a-z]+)\.([a-z]+)$/)
      .min(2)
      .required(),
    password: Joi.string().min(2).max(7).required(),
  };

  const [data, setData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
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
    const schemaForEmail = Joi.object({
      [target.name]: schema[target.name],
    });
    const { error } = schemaForEmail.validate(obj);
    return error ? error.details[0].message : null;
  };

  const validateForm = () => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("hey");
      }}
    >
      <Typography>My Form</Typography>
      <Box>
        <TextField
          label="Email"
          type={"email"}
          onChange={handleChange}
          name="email"
          value={data["email"] ? data["email"] : ""}
          helperText={errors["email"]}
          error={Boolean(errors["email"])}
        />
        <TextField
          label="Password"
          type={"password"}
          onChange={handleChange}
          name="password"
          helperText={errors["password"]}
          error={Boolean(errors["password"])}
        />
      </Box>
      <Button onClick={handleReset}>Reset</Button>
      <Button onClick={() => handleCancel("/")}>Cancel</Button>
      <Button type="submit" disabled={!!validateForm()}>
        Submit
      </Button>
=======
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MyForm() {
  const INITIAL_VALUE = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(INITIAL_VALUE);

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleReset = () => {
    setData(INITIAL_VALUE);
  };
  return (
    <Box>
      <Box>
        <TextField
          label="Email"
          name="email"
          onChange={handleChange}
          value={data["email"]}
        />
        <TextField
          label="Password"
          name="password"
          onChange={handleChange}
          value={data["password"]}
        />
      </Box>

      <Button onClick={handleReset}>Reset</Button>
      <Button>Cancel</Button>
      <Button>Submit</Button>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    </Box>
  );
}
