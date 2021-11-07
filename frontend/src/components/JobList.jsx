import { useEffect, useState } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await JoblyApi.getJobs();
      setJobs(resp);
    })();
  }, []);

  return (
    <>
      <h2>Jobs</h2>
      {jobs
        ? jobs.map(j => <JobCard key={j.id} info={j} />)
        : <p>Loading the jobs...</p>
      }
    </>
  );
};

export default JobList;
