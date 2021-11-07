import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../App";

// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
// November 6th, 2021 ^ code adapted from

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  return user ? children: <Navigate to="/" />;
};

export default PrivateRoute;
