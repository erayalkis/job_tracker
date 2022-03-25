import "../../Assets/Stylesheets/Jobs.css";
import Job from "../Job/Job";

const Jobs = () => {
  const jobs = [
    {
      company: "Llewellyn",
      role: "Software Engineer",
      salary: 59000,
      link: "https://google.com",
    },
    {
      company: "Not llewellyn",
      role: "Junior Ruby on Rails Developer",
      salary: 123000,
      link: "https://google.com",
    },
  ];

  return (
    <div className="jobs-container">
      <h1 className="jobs-header">Jobs</h1>

      <div className="jobs">
        {jobs.map((job_data) => (
          <Job {...job_data} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
