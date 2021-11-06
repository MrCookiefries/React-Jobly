import { Link } from "react-router-dom";

const CompanyCard = ({
  info: { handle, name, description, logoUrl, numEmployees }
}) => (
  <figure>
    <Link to={handle}>
      <h3>{name}</h3>
    </Link>
    <p>{description}</p>
    {logoUrl && <img src={logoUrl} alt={handle} />}
    <p>{numEmployees}</p>
  </figure>
);

export default CompanyCard;
