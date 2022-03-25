const Job = ({ company, role, salary, link }) => {
  return (
    <div className="job">
      <a href={link} target="-_blank">
        <h1>{company}</h1>
      </a>
      <h2>{role}</h2>
      <h2>{salary}</h2>
    </div>
  );
};

export default Job;
