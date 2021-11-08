import { Paper, Typography, Container } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";
import Form from "./Form";

const SignUpForm = () => {
  const initialState = {
    username: "", password: "",
    firstName: "", lastName: "",
    email: ""
  };
  const labels = {
    username: "Username", password: "Password",
    firstName: "First Name", lastName: "Last Name",
    email: "Email"
  };

  const manageUser = useContext(UserContext);
  const navigate = useNavigate();

  async function submitForm(data) {
    await manageUser.register(data);
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
          Sign Up
        </Typography>
        <Form
          initialState={initialState}
          submit="Register"
          submitForm={submitForm}
          labels={labels}
        />
      </Paper>
    </Container>
  );
};

export default SignUpForm;
