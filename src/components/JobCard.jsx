
const JobCard = ({
  info: { title, salary, equity }
}) => (
  <figure>
    <h3>{title}</h3>
    <p>${salary}</p>
    <p>{equity}</p>
    {/* apply button */}
  </figure>
);

export default JobCard;
