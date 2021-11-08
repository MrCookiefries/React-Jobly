import { Container, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";
import Form from "./Form";

const ProfileForm = () => {
  const manageUser = useContext(UserContext);
  const {user} = manageUser;

  const initialState = {
    firstName: user.firstName, lastName: user.lastName,
    email: user.email
  };
  const labels = {
    firstName: "First Name", lastName: "Last Name",
    email: "Email"
  };

  const navigate = useNavigate();

  async function submitForm(data) {
    await manageUser.update(data);
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
        gutterBottom
        align="center"
      >
        Update Profile
        </Typography>
      <Form
        initialState={initialState}
        submit="Update"
        submitForm={submitForm}
        labels={labels}
      />
      </Paper>
    </Container>
  );
};

export default ProfileForm;
