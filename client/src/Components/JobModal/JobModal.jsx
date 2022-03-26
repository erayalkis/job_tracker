import "../../Assets/Stylesheets/JobModal.css";

const JobModal = ({ setViewModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const targets = [...e.currentTarget.children];

    const job_data = {
      job: {
        company: targets[0].value,
        role: targets[1].value,
        pay: targets[2].value,
        link: targets[3].value,
      },
    };

    const headers = new Headers([["Content-Type", "application/json"]]);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      body: JSON.stringify(job_data),
      headers,
    }).then(() => {
      for (let i = 0; i < 5; i++) {
        targets[i].value = "";
      }
    });
  };

  const handleClick = () => setViewModal((old) => false);

  return (
    <div className="job-modal">
      <div className="job-modal-content">
        <h1 className="job-modal-close" onClick={handleClick}>
          X
        </h1>
        <h1>Add a new job:</h1>
        <div className="job-form-container">
          <form className="job-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Company..." />
            <input type="text" placeholder="Role..." />
            <input type="text" placeholder="Salary..." />
            <input type="text" placeholder="Link for listing..." />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
