import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import FormButtonComponent from "./FormButtonComponent";
import LoopIcon from "@mui/icons-material/Loop";
import { useNavigate } from "react-router-dom";

export default function FormComponent({ initialForm }) {
  const navigate = useNavigate();

  const [data, setData] = useState(initialForm);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = useCallback(() => {
    setData(initialForm);
  }, [initialForm]);

  const showRefresh = useMemo(() => {
    return <LoopIcon />;
  }, []);

  const navigateToRoot = useCallback(() => navigate("/"), []);

  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box component="form" sx={{ mt: 2, p: { xs: 1, sm: 2 } }}>
        <Typography align="center" variant="h5" component="h1" mb={2}>
          Example Form
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              name="firstName"
              label="First Name"
              type="text"
              fullWidth
              onChange={handleChange}
              value={data.firstName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              onChange={handleChange}
              value={data.lastName}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} my={2} direction="row" width="100">
          <Grid item xs={12} sm={6}>
            <FormButtonComponent
              node="cancel"
              color="error"
              component="div"
              variant="outlined"
              onClick={navigateToRoot}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormButtonComponent
              node={showRefresh}
              variant="outlined"
              component="div"
              onClick={resetForm}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
