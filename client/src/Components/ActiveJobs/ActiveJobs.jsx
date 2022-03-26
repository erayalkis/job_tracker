import "../../Assets/Stylesheets/ActiveJobs.css";
import Job from "../Job/Job";

const ActiveJobs = () => {
  const activeJobs = [];

  return (
    <div className="active-jobs">
      <h1 className="active-jobs-header">Active Jobs</h1>
      {activeJobs.length > 0 &&
        activeJobs.map((job_data) => <Job {...job_data} mini />)}
      {!activeJobs.length && <h1>No active jobs! :(</h1>}
    </div>
  );
};

export default ActiveJobs;
