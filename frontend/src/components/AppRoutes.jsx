import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CompanyList from "./CompanyList";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import PrivateRoute from "./PrivateRoute";
import ProfileForm from "./ProfileForm";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="companies" element={<PrivateRoute><CompanyList /></PrivateRoute>}>
        <Route path=":handle" element={<CompanyDetails />} />
      </Route>
      <Route path="jobs" element={<PrivateRoute><JobList /></PrivateRoute>} />
      <Route path="login" element={<LoginForm />} />
      <Route path="signup" element={<SignUpForm />} />
      <Route path="profile" element={<PrivateRoute><ProfileForm /></PrivateRoute>} />
    </Route>
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);

export default AppRoutes;
