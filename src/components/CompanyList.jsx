import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import CompanySearch from "./CompanySearch";

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await JoblyApi.getCompanies();
      setCompanies(resp);
    })();
  }, []);

  async function searchCompanies(searchTerm) {
    const resp = await JoblyApi.getCompanies({name: searchTerm});
    setCompanies(resp);
  }

  return (
    <>
      <h2>Companies</h2>
      <Outlet />
      <CompanySearch searchCompanies={searchCompanies} />
      {companies
        ? companies.length
          ? companies.map(c => <CompanyCard key={c.handle} info={c} />)
          : <p>Sorry, No companies were found.</p>
        : <p>Loading companies...</p>
      }
    </>
  );
};

export default CompanyList;
