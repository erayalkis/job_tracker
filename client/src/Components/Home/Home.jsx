import Jobs from "../Jobs/Jobs";
import ActiveJobs from "../ActiveJobs/ActiveJobs";
import JobButton from "../JobButton/JobButton";
import JobModal from "../JobModal/JobModal";
import { useState } from "react";

const Home = () => {
  const [viewModal, setViewModal] = useState(false);

  return (
    <>
      <Jobs />
      <ActiveJobs />
      <JobButton setViewModal={setViewModal} />
      {viewModal && <JobModal setViewModal={setViewModal} />}
    </>
  );
};

export default Home;
