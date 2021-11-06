import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CompanyList from "./CompanyList";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="companies" element={<CompanyList />}>
        <Route path=":handle" element={<CompanyDetails />} />
      </Route>
      <Route path="jobs" element={<JobList />} />
      <Route path="login" element={<h1>Login</h1>} />
      <Route path="signup" element={<h1>Signup</h1>} />
      <Route path="profile" element={<h1>Profile</h1>} />
    </Route>
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);

export default AppRoutes;
