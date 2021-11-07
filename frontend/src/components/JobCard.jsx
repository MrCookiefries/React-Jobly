import { useContext } from "react";
import { UserContext } from "../App";

const JobCard = ({
  info: { title, salary, equity, id }
}) => {
  const manageUser = useContext(UserContext);
  const {user: {applications}} = manageUser;
  const isApplied = applications.some(a => a === id);

  async function applyJob() {
    await manageUser.applyJob(id);
  }

  return (
    <figure>
      <h3>{title}</h3>
      <p>${salary}</p>
      <p>{equity}</p>
      <button onClick={applyJob} disabled={isApplied} type="button">
        {isApplied ? "Applied": "Apply"}
      </button>
    </figure>
  );
};

export default JobCard;
