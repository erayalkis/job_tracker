const Home = () => {
  return (
    <>
      <h1>Home!</h1>
      {false && <Jobs />}
      {false && <ActiveJobs />}
    </>
  );
};

export default Home;
