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
    <>
      <h2>Sign Up</h2>
      <Form
        initialState={initialState}
        submit="Register"
        submitForm={submitForm}
        labels={labels}
      />
    </>
  );
};

export default SignUpForm;
