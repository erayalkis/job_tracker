import "../../Assets/Stylesheets/Job.css";

const Job = ({ id, company, role, pay, link, mini, setJobs }) => {
  const handleDoubleClick = () => {
    fetch(`http://localhost:3000/jobs/${id}`, { method: "DELETE" }).then(() => {
      setJobs((old) => old.filter((job) => job.id !== id));
    });
  };

  const handleDrag = (e) => {
    const headers = new Headers([["Content-Type", "application/json"]]);

    fetch(`http://localhost:3000/jobs/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ job: { status: "ACTIVE" } }),
      headers,
    });
  };

  return (
    <div
      className={"job" + (mini ? "-mini" : "")}
      onDoubleClick={handleDoubleClick}
      draggable
      onDragEnd={handleDrag}
    >
      <a href={link} target="-_blank" className="job-company">
        <h1>{company}</h1>
      </a>
      <h2 className="job-role">{role}</h2>
      <h2 className="job-salary">$ {pay}</h2>
    </div>
  );
};

export default Job;
