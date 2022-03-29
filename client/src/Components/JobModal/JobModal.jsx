import "../../Assets/Stylesheets/JobModal.css";

const JobModal = ({ setViewModal, setJobs }) => {
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

    fetch("https://job-tracker-backendio.herokuapp.com//jobs", {
      method: "POST",
      body: JSON.stringify(job_data),
      headers,
    })
      .then((res) => {
        for (let i = 0; i < 5; i++) {
          targets[i].value = "";
        }

        return res.json();
      })
      .then((res) => setJobs((old) => [...old, res]));
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
            <input type="text" placeholder="Company..." required />
            <input type="text" placeholder="Role..." required />
            <input type="text" placeholder="Salary..." required />
            <input type="text" placeholder="Link for listing..." required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
