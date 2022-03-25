import "../../Assets/Stylesheets/ActiveJobs.css";
import Job from "../Job/Job";

const ActiveJobs = () => {
  const activeJobs = [
    {
      company: "Not llewellyn",
      role: "Backend developer",
      salary: 123000,
      link: "https://google.com",
    },
  ];

  return (
    <div className="active-jobs">
      <h1 className="active-jobs-header">Active Jobs</h1>
      {activeJobs.map((job_data) => (
        <Job {...job_data} mini />
      ))}
    </div>
  );
};

export default ActiveJobs;
