import React from "react";
import { string, bool, object, func } from "prop-types";
import TextField from "@mui/material/TextField";
<<<<<<< HEAD
import { makeFirstLetterCapital } from "../../utils/algoMethods";
=======
import { makeFirstLetterCapital } from "../utils/algoMethods";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import Grid from "@mui/material/Grid";

const Input = ({
  variant,
  type,
  name,
  data,
  label,
  required,
  error,
  onChange,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

Input.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  error: string,
  onChange: func.isRequired,
  variant: string,
  data: object,
};

Input.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
};

export default React.memo(Input);