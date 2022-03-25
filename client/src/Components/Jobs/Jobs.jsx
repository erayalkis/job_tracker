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
  ];

  return (
    <div className="jobs">
      <h1>Jobs</h1>
      {jobs.map((job_data) => (
        <Job {...job_data} />
      ))}
    </div>
  );
};

export default Jobs;
