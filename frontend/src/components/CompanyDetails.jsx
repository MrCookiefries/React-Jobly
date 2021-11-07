import { useEffect, useState } from "react";
import { useParams } from "react-router";
import JoblyApi from "../api";
import JobCard from "./JobCard";

const CompanyDetails = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await JoblyApi.getCompany(handle);
      setCompany(resp);
    })();
  }, [handle]);

  return (
    <div>
      {company
        ? <>
          <h4>{company.name}</h4>
          <p>{company.description}</p>
          {company.logoUrl && <img src={company.logoUrl} alt={company.handle} />}
          <p>{company.numEmployees}</p>
          <div>
            {company.jobs.length
              ? company.jobs.map(j => <JobCard key={j.id} info={j} />)
              : <p>{company.name} has no jobs.</p>
            }
          </div>
        </>
        : <p>Searching for {handle}</p>
      }
    </div>
  );
};

export default CompanyDetails;
