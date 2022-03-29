import Jobs from "../Jobs/Jobs";
import ActiveJobs from "../ActiveJobs/ActiveJobs";
import JobButton from "../JobButton/JobButton";
import JobModal from "../JobModal/JobModal";
import { useState, useEffect } from "react";
import { useMemo } from "react";

const Home = () => {
  const [viewModal, setViewModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const activeJobs = useMemo(
    () => jobs.filter((job) => job.status === "ACTIVE"),
    [jobs]
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://job-tracker-backendio.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((res) => {
        setJobs(res);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Jobs jobs={jobs} setJobs={setJobs} loading={loading} />
      <ActiveJobs activeJobs={activeJobs} setJobs={setJobs} loading={loading} />
      <JobButton setViewModal={setViewModal} />
      {viewModal && <JobModal setViewModal={setViewModal} setJobs={setJobs} />}
    </>
  );
};

export default Home;
