import "../../Assets/Stylesheets/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Jobify</h1>
      <h2>
        <em>Welcome!</em>
      </h2>
      <h1 className="navbar-settings">Settings</h1>
    </nav>
  );
};

export default Navbar;
