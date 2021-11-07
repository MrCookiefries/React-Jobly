import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Home = () => {
  const {user} = useContext(UserContext);

  return (
    <>
      {user
        ? <>
          <h2>Welcome {user.username}!</h2>
          <p>
            So glad that you're here {`${user.firstName} ${user.lastName}`}. Now's the time to check out companies and the many jobs that they have.
          </p>
        </>
        : <>
          <h2>Howdy Stranger!</h2>
          <p>
            In order to use the site, you must have an account. Please <Link to="signup">sign up</Link> or <Link to="login">login</Link> to continue.
          </p>
        </>
      }
    </>
  );
};

export default Home;
