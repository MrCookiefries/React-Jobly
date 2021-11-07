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
    <>
      <h2>Sign In</h2>
      <Form
        initialState={initialState}
        submit="Login"
        submitForm={submitForm}
        labels={labels}
      />
    </>
  );
};

export default LoginForm;
