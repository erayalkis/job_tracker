import "../../Assets/Stylesheets/ActiveJobs.css";
import { useState, useEffect } from "react";
import Job from "../Job/Job";

const ActiveJobs = ({ activeJobs, loading }) => {
  return (
    <div className="active-jobs">
      <h1 className="active-jobs-header">Active Jobs</h1>
      {loading ? (
        <h3>Fetching data...</h3>
      ) : activeJobs.length ? (
        activeJobs.map((job_data) => (
          <Job {...job_data} key={job_data["id"]} mini />
        ))
      ) : (
        <h1>No active jobs! :(</h1>
      )}
    </div>
  );
};

export default ActiveJobs;
