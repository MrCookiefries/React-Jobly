import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Layout = () => {

  return (
    <>
      <header>
        <h1>Jobly!</h1>
        <p>A place for jobs.</p>
      </header>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
