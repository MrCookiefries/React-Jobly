import { Paper, Typography, Container } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";
import Form from "./Form";

const LoginForm = () => {
  const initialState = {
    username: "", password: ""
  };
  const labels = {
    username: "Username", password: "Password"
  };

  const manageUser = useContext(UserContext);
  const navigate = useNavigate();

  async function submitForm(data) {
    await manageUser.login(data);
    navigate(`/`);
  }

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={4}
        sx={{
          p: 2,
          pb: 4
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          color="primary"
          align="center"
          gutterBottom
        >
          Sign In
        </Typography>
        <Form
          initialState={initialState}
          submit="Login"
          submitForm={submitForm}
          labels={labels}
        />
      </Paper>
    </Container>
  );
};

export default LoginForm;
