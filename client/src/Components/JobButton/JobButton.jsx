import "../../Assets/Stylesheets/JobButton.css";

const JobButton = ({ setViewModal }) => {
  const handleClick = () => setViewModal((old) => true);

  return (
    <div className="job-button" onClick={handleClick}>
      <h1>+</h1>
    </div>
  );
};

export default JobButton;
