import "../../Assets/Stylesheets/Job.css";

const Job = ({ company, role, pay, link, mini }) => {
  return (
    <div className={"job" + (mini ? "-mini" : "")}>
      <a href={link} target="-_blank" className="job-company">
        <h1>{company}</h1>
      </a>
      <h2 className="job-role">{role}</h2>
      <h2 className="job-salary">$ {pay}</h2>
    </div>
  );
};

export default Job;
