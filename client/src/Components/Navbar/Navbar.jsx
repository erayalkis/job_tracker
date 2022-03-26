import "../../Assets/Stylesheets/Navbar.css";

const Navbar = ({ editing, setIsEditing }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Jobify</h1>

      <h1 className="navbar-settings">
        {editing ? "Leave Edit Mode" : "Edit Jobs"}
      </h1>
    </nav>
  );
};

export default Navbar;
