import "./Assets/Stylesheets/Index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import { render } from "react-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
