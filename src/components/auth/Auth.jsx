import { CheckBox } from "@mui/icons-material";
import {
  Alert,
  Button,
  ButtonBase,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { authWithGoogle, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      await register(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="centr"
        alignItems="centr"
        flexDirection="column"
        marginTop="150px"
        marginLeft="500px"
      >
        {error && <Alert severity="error">{error}</Alert>}
        <Typography
          sx={{
            fontFamily: "Montserrat,sans-serif",
            letterSpacing: "2px",
            fontSize: "32px",
          }}
        >
          Sign Up
        </Typography>
        <TextField
          sx={{ marginTop: "30px", width: "40%" }}
          label="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "30px", width: "40%" }}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{ marginTop: "30px", width: "40%" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Button
          sx={{ marginTop: "30px", width: "40%" }}
          variant="contained"
          onClick={() => authWithGoogle()}
        >
          Continue with Google
        </Button>
        <FormControl>
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ marginTop: "30px" }}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default Auth;
