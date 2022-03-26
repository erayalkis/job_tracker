import "../../Assets/Stylesheets/Jobs.css";
import Job from "../Job/Job";

const Jobs = ({ jobs, setJobs, loading }) => {
  return (
    <div className="jobs-container">
      <h1 className="jobs-header">Saved Jobs</h1>

      <div className="jobs">
        {loading ? (
          <h1>Fetching data...</h1>
        ) : jobs.length ? (
          jobs.map((job_data) => (
            <Job {...job_data} key={job_data["id"]} setJobs={setJobs} />
          ))
        ) : (
          !jobs.length && <h1>No saved jobs! :(</h1>
        )}
      </div>
    </div>
  );
};

export default Jobs;
