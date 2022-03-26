import { useState, useEffect } from "react";
import "../../Assets/Stylesheets/Jobs.css";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((res) => setJobs(res));
  }, []);

  return (
    <div className="jobs-container">
      <h1 className="jobs-header">Saved Jobs</h1>

      <div className="jobs">
        {jobs.length > 0 && jobs.map((job_data) => <Job {...job_data} />)}

        {!jobs.length && <h1>No saved jobs! :(</h1>}
      </div>
    </div>
  );
};

export default Jobs;
