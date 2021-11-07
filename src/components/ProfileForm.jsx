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
    <>
      <h2>Edit {user.username}</h2>
      <Form
        initialState={initialState}
        submit="Update"
        submitForm={submitForm}
        labels={labels}
      />
    </>
  );
};

export default ProfileForm;
